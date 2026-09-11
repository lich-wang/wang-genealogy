---
schema: wang-person/v1
id: p_rtD6bGUYxh1w6MBByvNhUR
status: active
merged_into: null
display_name: 王維哲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kszU1kTQGGN8s5qPBJmASN
        subject_person_id: p_rtD6bGUYxh1w6MBByvNhUR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維哲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Snd1NPJ4KPV9CYo64fNMwY
          claim_id: c_kszU1kTQGGN8s5qPBJmASN
          source_id: s_6FGQi7Wweif6Z7VWMWjdvu
          stance: supports
          locator: CBDB:252924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252924）
          source: &a1
            id: s_6FGQi7Wweif6Z7VWMWjdvu
            source_type: api_record
            title: 中国历代人物传记资料库：王維哲（CBDB 252924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252924&o=json
            external_identifier: CBDB:252924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N6WKDGkV8gwaepNCbkQPab
        subject_person_id: p_rtD6bGUYxh1w6MBByvNhUR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維哲，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 252924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aBIUuxpuN1JrGH-HhAOspW
          claim_id: c_N6WKDGkV8gwaepNCbkQPab
          source_id: s_6FGQi7Wweif6Z7VWMWjdvu
          stance: supports
          locator: CBDB:252924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_ebo0HZ_j8lJ6UHiuCSevqM
        subject_person_id: p_rtD6bGUYxh1w6MBByvNhUR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HNes5OXuLtMe8m7L9lISqh
          claim_id: c_ebo0HZ_j8lJ6UHiuCSevqM
          source_id: s_UbMDK3watKgmMGbKALPCAi
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UbMDK3watKgmMGbKALPCAi
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 198292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json
            external_identifier: CBDB:198292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
  other: []
---

# 王維哲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維哲 | accepted |
| bio.summary | 王維哲，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 252924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齊（CBDB 198292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json)
- [中国历代人物传记资料库：王維哲（CBDB 252924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252924&o=json)
