---
schema: wang-person/v1
id: p_DmNGUDqJ9f8KfFV4KfAqgQ
status: active
merged_into: null
display_name: 王进
cbdb_id: 175424
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K4ovSftJaRHEtbz7QztrvY
        subject_person_id: p_DmNGUDqJ9f8KfFV4KfAqgQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王进（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_9zStaGMbEamKhRC2QM5NTF
          claim_id: c_K4ovSftJaRHEtbz7QztrvY
          source_id: s_vbFSMszcmAogFc7PHxyHFZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vbFSMszcmAogFc7PHxyHFZ
            source_type: api_record
            title: 维基数据：王进（Q45658822）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658822
            external_identifier: Q45658822
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_DnEUoaNKCkKrScJGGDF_yV
          claim_id: c_K4ovSftJaRHEtbz7QztrvY
          source_id: s_oYrdjnCzVDA38fhexV464o
          stance: supports
          locator: CBDB:175424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oYrdjnCzVDA38fhexV464o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王進（175424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175424&o=json
            external_identifier: CBDB:175424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.118Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qA4zrbaXzjCWmHXfqa3Hv2
        subject_person_id: p_DmNGUDqJ9f8KfFV4KfAqgQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YYuU5qMPF6LAqMcuB1jX7H
          claim_id: c_qA4zrbaXzjCWmHXfqa3Hv2
          source_id: s_vbFSMszcmAogFc7PHxyHFZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_vbFSMszcmAogFc7PHxyHFZ
            source_type: api_record
            title: 维基数据：王进（Q45658822）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658822
            external_identifier: Q45658822
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_B4KUMQpxMex7jxzZh2yBUx
        subject_person_id: p_DmNGUDqJ9f8KfFV4KfAqgQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王进
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZpHVKLRy1deQAK9XfuuaYm
          claim_id: c_B4KUMQpxMex7jxzZh2yBUx
          source_id: s_oYrdjnCzVDA38fhexV464o
          stance: supports
          locator: Q45658822
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xnDTHRiM9bFJQQrTPt1mvE
          claim_id: c_B4KUMQpxMex7jxzZh2yBUx
          source_id: s_vbFSMszcmAogFc7PHxyHFZ
          stance: supports
          locator: Q45658822
          quotation: null
          interpretation_note: null
          source:
            id: s_vbFSMszcmAogFc7PHxyHFZ
            source_type: api_record
            title: 维基数据：王进（Q45658822）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658822
            external_identifier: Q45658822
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UhL31T2E42pKM2hWi71Ahg
        subject_person_id: p_ABttrGR9ETMfaUWfuE5Xsi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DmNGUDqJ9f8KfFV4KfAqgQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EvfFNq36j8xhweJyEZ7Hus
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_CdjpQpB9o7sfhYkeEHMHCN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CdjpQpB9o7sfhYkeEHMHCN
            source_type: api_record
            title: 维基数据：王逸（Q45658647）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658647
            external_identifier: Q45658647
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:58.710Z
            metadata_json: null
        - id: cs_QnASDUkxmNUXodTFgM3pdS
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_jmGu5vS3p9GvQHE422FM7J
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jmGu5vS3p9GvQHE422FM7J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸（175421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json
            external_identifier: CBDB:175421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:58.863Z
            metadata_json: null
        - id: cs_sCgGjv7dSw6x5G8dTB57cC
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_vbFSMszcmAogFc7PHxyHFZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vbFSMszcmAogFc7PHxyHFZ
            source_type: api_record
            title: 维基数据：王进（Q45658822）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658822
            external_identifier: Q45658822
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:06.955Z
            metadata_json: null
        - id: cs_7NyuRgexCdY2nPDKMZZK72
          claim_id: c_UhL31T2E42pKM2hWi71Ahg
          source_id: s_oYrdjnCzVDA38fhexV464o
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_oYrdjnCzVDA38fhexV464o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王進（175424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175424&o=json
            external_identifier: CBDB:175424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:07.118Z
            metadata_json: null
      object_person:
        id: p_ABttrGR9ETMfaUWfuE5Xsi
        status: active
        display_name: 王逸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王进

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王进（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175424） | accepted |
| death.date | 894年 | accepted |
| name.primary | 王进 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ABttrGR9ETMfaUWfuE5Xsi | 王逸 | accepted |

## 外部来源

- [维基数据：王进（Q45658822）](https://www.wikidata.org/wiki/Q45658822)
- [维基数据：王逸（Q45658647）](https://www.wikidata.org/wiki/Q45658647)
- [CBDB 中国历代人物传记资料库：王進（175424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175424&o=json)
- [CBDB 中国历代人物传记资料库：王逸（175421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175421&o=json)
