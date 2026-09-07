---
schema: wang-person/v1
id: p_CE78ro1FFrTLnxrDXoohDR
status: active
merged_into: null
display_name: 王知绶
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J95f5PuKrjgfocekA9eYXX
        subject_person_id: p_CE78ro1FFrTLnxrDXoohDR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知绶（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175420 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TuaBGTa987aykRAvWnpC9N
          claim_id: c_J95f5PuKrjgfocekA9eYXX
          source_id: s_68tYFjEBBzPBoP61Hr9vNm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_68tYFjEBBzPBoP61Hr9vNm
            source_type: api_record
            title: 维基数据：王知绶（Q45658587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658587
            external_identifier: Q45658587
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_DzGLNe4hZakLnNgzrRJx3F
          claim_id: c_J95f5PuKrjgfocekA9eYXX
          source_id: s_2X8PKhjiqT5CeVPokie9gA
          stance: supports
          locator: CBDB:175420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2X8PKhjiqT5CeVPokie9gA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知綬（175420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175420&o=json
            external_identifier: CBDB:175420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.276Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AWLwn1w9zQct4KCWgJywJC
        subject_person_id: p_CE78ro1FFrTLnxrDXoohDR
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
        - id: cs_UPtuHbP8MhshL58xK7jzJ4
          claim_id: c_AWLwn1w9zQct4KCWgJywJC
          source_id: s_68tYFjEBBzPBoP61Hr9vNm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_68tYFjEBBzPBoP61Hr9vNm
            source_type: api_record
            title: 维基数据：王知绶（Q45658587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658587
            external_identifier: Q45658587
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUD7gg74McEWsVBy7w2d1P
        subject_person_id: p_CE78ro1FFrTLnxrDXoohDR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知绶
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CMfvK5BcqfQH21F8W4iM8g
          claim_id: c_QUD7gg74McEWsVBy7w2d1P
          source_id: s_2X8PKhjiqT5CeVPokie9gA
          stance: supports
          locator: Q45658587
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_JvfxUAz143VcsfhDuQ6GSM
          claim_id: c_QUD7gg74McEWsVBy7w2d1P
          source_id: s_68tYFjEBBzPBoP61Hr9vNm
          stance: supports
          locator: Q45658587
          quotation: null
          interpretation_note: null
          source:
            id: s_68tYFjEBBzPBoP61Hr9vNm
            source_type: api_record
            title: 维基数据：王知绶（Q45658587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658587
            external_identifier: Q45658587
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YWurYqz2ZkbPcQLz9kCe9J
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CE78ro1FFrTLnxrDXoohDR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N5kC656dcwGN57rD9a4nsK
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RD4sw4bpaLA5KUZpiyg3Qg
            source_type: api_record
            title: 维基数据：王迈（Q45657929）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657929
            external_identifier: Q45657929
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.051Z
            metadata_json: null
        - id: cs_U1HXUnDDLsc6xUvJfzxdRq
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1VmAjatw3vy2Jv48pJ6tUR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json
            external_identifier: CBDB:175409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.188Z
            metadata_json: null
        - id: cs_1G7MTR2cLg3Sxm9RgAZ4qj
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
          source_id: s_68tYFjEBBzPBoP61Hr9vNm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_68tYFjEBBzPBoP61Hr9vNm
            source_type: api_record
            title: 维基数据：王知绶（Q45658587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658587
            external_identifier: Q45658587
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_JLCFKYJNDn1KFXAUF1NQTf
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
          source_id: s_2X8PKhjiqT5CeVPokie9gA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2X8PKhjiqT5CeVPokie9gA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知綬（175420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175420&o=json
            external_identifier: CBDB:175420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.276Z
            metadata_json: null
      object_person:
        id: p_J3uEtABU9yZpLVpDBsGAq3
        status: active
        display_name: 王迈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知绶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王知绶（卒于894年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175420 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 894年 | accepted |
| name.primary | 王知绶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J3uEtABU9yZpLVpDBsGAq3 | 王迈 | accepted |

## 外部来源

- [维基数据：王迈（Q45657929）](https://www.wikidata.org/wiki/Q45657929)
- [维基数据：王知绶（Q45658587）](https://www.wikidata.org/wiki/Q45658587)
- [CBDB 中国历代人物传记资料库：王邁（175409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json)
- [CBDB 中国历代人物传记资料库：王知綬（175420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175420&o=json)
