---
schema: wang-person/v1
id: p_DE8d8ednEw92f8RvF3Wp1b
status: active
merged_into: null
display_name: 王無擇
cbdb_id: 175926
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q5uigfQVCNZWMeJ6eXNNPK
        subject_person_id: p_DE8d8ednEw92f8RvF3Wp1b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無擇（卒于712年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175926 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ljKkfIfKH3bEyvCT0fgocM
          claim_id: c_q5uigfQVCNZWMeJ6eXNNPK
          source_id: s_Rq2rZXmKy1ckA6rjutLEsW
          stance: supports
          locator: CBDB:175926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Rq2rZXmKy1ckA6rjutLEsW
            source_type: api_record
            title: 中国历代人物传记资料库：王無擇（CBDB 175926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175926&o=json
            external_identifier: CBDB:175926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_p5d6cz2A6sit8twpZEtYg3
        subject_person_id: p_DE8d8ednEw92f8RvF3Wp1b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 712年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0712-01-01
            latest: 0712-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YALkF8JKjFw8cuo5KXxnk6
          claim_id: c_p5d6cz2A6sit8twpZEtYg3
          source_id: s_Rq2rZXmKy1ckA6rjutLEsW
          stance: supports
          locator: CBDB:175926
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 712
          source:
            id: s_Rq2rZXmKy1ckA6rjutLEsW
            source_type: api_record
            title: 中国历代人物传记资料库：王無擇（CBDB 175926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175926&o=json
            external_identifier: CBDB:175926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fnV2764zhtL8apX3s852bm
        subject_person_id: p_DE8d8ednEw92f8RvF3Wp1b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王無擇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iEGWf2HqA9gFQJ9tqU2uYe
          claim_id: c_fnV2764zhtL8apX3s852bm
          source_id: s_Rq2rZXmKy1ckA6rjutLEsW
          stance: supports
          locator: CBDB:175926
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 712
          source:
            id: s_Rq2rZXmKy1ckA6rjutLEsW
            source_type: api_record
            title: 中国历代人物传记资料库：王無擇（CBDB 175926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175926&o=json
            external_identifier: CBDB:175926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3TvIrJQ1qqNdErsGn9Y4_w
        subject_person_id: p_rjQsevpLMb75G2cj4d91vV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DE8d8ednEw92f8RvF3Wp1b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zRXqAqewKZTCS_O5neHvYo
          claim_id: c_3TvIrJQ1qqNdErsGn9Y4_w
          source_id: s_E9mNyG6XNRo91eCKUpX5pU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E9mNyG6XNRo91eCKUpX5pU
            source_type: api_record
            title: 中国历代人物传记资料库：王孝傑（CBDB 175925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175925&o=json
            external_identifier: CBDB:175925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rjQsevpLMb75G2cj4d91vV
        status: active
        display_name: 王孝傑
        merged_into_person_id: null
  children:
    - claim:
        id: c_QYtMgRJ3n28jmWeKuLg-tC
        subject_person_id: p_DE8d8ednEw92f8RvF3Wp1b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNoFqs5WRDmQfihCwCiECy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tnhrxXP6gz1QfiawOzDgGD
          claim_id: c_QYtMgRJ3n28jmWeKuLg-tC
          source_id: s_PWkfRGPXkBhVTJGRfB49hm
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PWkfRGPXkBhVTJGRfB49hm
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 191817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191817&o=json
            external_identifier: CBDB:191817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DNoFqs5WRDmQfihCwCiECy
        status: active
        display_name: 王憲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王無擇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王無擇（卒于712年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175926 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 712年 | accepted |
| name.primary | 王無擇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rjQsevpLMb75G2cj4d91vV | 王孝傑 | accepted |
| children | p_DNoFqs5WRDmQfihCwCiECy | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王無擇（CBDB 175926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175926&o=json)
- [中国历代人物传记资料库：王憲（CBDB 191817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191817&o=json)
- [中国历代人物传记资料库：王孝傑（CBDB 175925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175925&o=json)
