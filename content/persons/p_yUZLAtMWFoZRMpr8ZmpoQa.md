---
schema: wang-person/v1
id: p_yUZLAtMWFoZRMpr8ZmpoQa
status: active
merged_into: null
display_name: 王貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iFayr5FvDKHyVL6SQeaoEx
        subject_person_id: p_yUZLAtMWFoZRMpr8ZmpoQa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yt6L3dLLFBHBJCdeLBS6x7
          claim_id: c_iFayr5FvDKHyVL6SQeaoEx
          source_id: s_tejBG873ouLnUuY3rrsL7B
          stance: supports
          locator: CBDB:161932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（161932）
          source: &a1
            id: s_tejBG873ouLnUuY3rrsL7B
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 161932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161932&o=json
            external_identifier: CBDB:161932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bBFs5Dq3m2hjnJVfGJZcK1
        subject_person_id: p_yUZLAtMWFoZRMpr8ZmpoQa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 161932）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pu7u_9q6bu7D5drOyAHYbH
          claim_id: c_bBFs5Dq3m2hjnJVfGJZcK1
          source_id: s_tejBG873ouLnUuY3rrsL7B
          stance: supports
          locator: CBDB:161932
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_c6SclBf50dLbwHwG0OIo1D
        subject_person_id: p_yUZLAtMWFoZRMpr8ZmpoQa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NkAbTJ9d5SmH3apwzG6XBB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bszj1tSswKg-lgSOnVw2mk
          claim_id: c_c6SclBf50dLbwHwG0OIo1D
          source_id: s_tejBG873ouLnUuY3rrsL7B
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenguan25：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NkAbTJ9d5SmH3apwzG6XBB
        status: active
        display_name: 王靈仙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 161932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NkAbTJ9d5SmH3apwzG6XBB | 王靈仙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 161932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161932&o=json)
