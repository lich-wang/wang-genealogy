---
schema: wang-person/v1
id: p_MvDkTEyoxt1BiLsscV6A64
status: active
merged_into: null
display_name: 王毗
cbdb_id: 155510
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Z1zL4fDJZFJzBxaqL1aeQA
        subject_person_id: p_MvDkTEyoxt1BiLsscV6A64
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毗，唐人物。籍贯長安，曾任縣尉。（中国历代人物传记资料库 CBDB 155510）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_D2fGXQq1-uMXEwE5Y85uAy
          claim_id: c_Z1zL4fDJZFJzBxaqL1aeQA
          source_id: s_JP8PybnUAEo8FTevLB34jW
          stance: supports
          locator: CBDB:155510
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JP8PybnUAEo8FTevLB34jW
            source_type: api_record
            title: 中国历代人物传记资料库：王毗（CBDB 155510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155510&o=json
            external_identifier: CBDB:155510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iYbTqL28h1ZccqtUvgNybM
        subject_person_id: p_MvDkTEyoxt1BiLsscV6A64
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HDSaF6312UHjJvq36w7NCL
          claim_id: c_iYbTqL28h1ZccqtUvgNybM
          source_id: s_JP8PybnUAEo8FTevLB34jW
          stance: supports
          locator: CBDB:155510
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EMPwVATmXJM5jR1WOWLfz7
        subject_person_id: p_uJfXrem9G3wEMVyHTkQFNq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MvDkTEyoxt1BiLsscV6A64
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bi8Sgi5cJyPdprGZTlYOg7
          claim_id: c_EMPwVATmXJM5jR1WOWLfz7
          source_id: s_JP8PybnUAEo8FTevLB34jW
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JP8PybnUAEo8FTevLB34jW
            source_type: api_record
            title: 中国历代人物传记资料库：王毗（CBDB 155510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155510&o=json
            external_identifier: CBDB:155510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uJfXrem9G3wEMVyHTkQFNq
        status: active
        display_name: 王怡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王毗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王毗，唐人物。籍贯長安，曾任縣尉。（中国历代人物传记资料库 CBDB 155510） | accepted |
| name.primary | 王毗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uJfXrem9G3wEMVyHTkQFNq | 王怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王毗（CBDB 155510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155510&o=json)
