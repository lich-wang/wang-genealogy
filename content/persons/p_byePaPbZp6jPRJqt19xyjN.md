---
schema: wang-person/v1
id: p_byePaPbZp6jPRJqt19xyjN
status: active
merged_into: null
display_name: 王奇橙
cbdb_id: 216205
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yJ5EC3Hoq718BZoH4oDAPm
        subject_person_id: p_byePaPbZp6jPRJqt19xyjN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇橙，明人物。萬曆五年進士，入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 216205）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8ZLWKxj70zS0SZoGfMElWo
          claim_id: c_yJ5EC3Hoq718BZoH4oDAPm
          source_id: s_HsxCnbKvAK4p1Zrqr3644D
          stance: supports
          locator: CBDB:216205
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HsxCnbKvAK4p1Zrqr3644D
            source_type: api_record
            title: 中国历代人物传记资料库：王奇橙（CBDB 216205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216205&o=json
            external_identifier: CBDB:216205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Q7LKo9xiRMGsQmyztVy3i
        subject_person_id: p_byePaPbZp6jPRJqt19xyjN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奇橙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GyNgMAGm8YgpjoEWjEQSDm
          claim_id: c_1Q7LKo9xiRMGsQmyztVy3i
          source_id: s_HsxCnbKvAK4p1Zrqr3644D
          stance: supports
          locator: CBDB:216205
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_g1HfTeReKUjXOtfKPK9ZRi
        subject_person_id: p_byePaPbZp6jPRJqt19xyjN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PqjeWP7NXBGIUWhUjBgAJ8
          claim_id: c_g1HfTeReKUjXOtfKPK9ZRi
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q9EatNnQ4FxJEyR2y492WM
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 206312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json
            external_identifier: CBDB:206312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
  other: []
---

# 王奇橙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奇橙，明人物。萬曆五年進士，入仕鄉貢舉人，曾任教諭、知縣。（中国历代人物传记资料库 CBDB 216205） | accepted |
| name.primary | 王奇橙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奇橙（CBDB 216205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216205&o=json)
- [中国历代人物传记资料库：王約（CBDB 206312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json)
