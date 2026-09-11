---
schema: wang-person/v1
id: p_87WeDr7oDXsapYrnaJv5K5
status: active
merged_into: null
display_name: 王作善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YEaTjhCkJ9Z8X1QwcKLTvN
        subject_person_id: p_87WeDr7oDXsapYrnaJv5K5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iRTRCUDJz7mVpiB5i8iCwW
          claim_id: c_YEaTjhCkJ9Z8X1QwcKLTvN
          source_id: s_gTCkM8teUKjXkEEFxd25R7
          stance: supports
          locator: CBDB:635998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635998）
          source: &a1
            id: s_gTCkM8teUKjXkEEFxd25R7
            source_type: api_record
            title: 中国历代人物传记资料库：王作善（CBDB 635998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635998&o=json
            external_identifier: CBDB:635998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yy2rcneH7CX6UD5BNKDm5f
        subject_person_id: p_87WeDr7oDXsapYrnaJv5K5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作善，清人物。籍贯壽張，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 635998）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BikBQozkYzfbI_KYcld4Uv
          claim_id: c_yy2rcneH7CX6UD5BNKDm5f
          source_id: s_gTCkM8teUKjXkEEFxd25R7
          stance: supports
          locator: CBDB:635998
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
  descendants: []
  other: []
---

# 王作善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作善 | accepted |
| bio.summary | 王作善，清人物。籍贯壽張，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 635998） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作善（CBDB 635998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635998&o=json)
