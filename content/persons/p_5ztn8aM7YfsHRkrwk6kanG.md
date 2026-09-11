---
schema: wang-person/v1
id: p_5ztn8aM7YfsHRkrwk6kanG
status: active
merged_into: null
display_name: 王沄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3FB11NGBD22B5CF7mkMJ9n
        subject_person_id: p_5ztn8aM7YfsHRkrwk6kanG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1CC85nVo1rk8SrqCQ7AAut
          claim_id: c_3FB11NGBD22B5CF7mkMJ9n
          source_id: s_UqdFY6idku6j45JMhF5PSS
          stance: supports
          locator: CBDB:71088
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71088）
          source: &a1
            id: s_UqdFY6idku6j45JMhF5PSS
            source_type: api_record
            title: 中国历代人物传记资料库：王沄（CBDB 71088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71088&o=json
            external_identifier: CBDB:71088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EuBjF5pXYBDcCAiVR1AvDs
        subject_person_id: p_5ztn8aM7YfsHRkrwk6kanG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1619年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vpGg3y5NmQHm3fAkJGon9C
          claim_id: c_EuBjF5pXYBDcCAiVR1AvDs
          source_id: s_UqdFY6idku6j45JMhF5PSS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DRUbkU6pLUpKnDq3RTJAUg
        subject_person_id: p_5ztn8aM7YfsHRkrwk6kanG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沄（生于1619年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71088）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0DNR86wuYIY_54GSQrO7aQ
          claim_id: c_DRUbkU6pLUpKnDq3RTJAUg
          source_id: s_UqdFY6idku6j45JMhF5PSS
          stance: supports
          locator: CBDB:71088
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

# 王沄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沄 | accepted |
| birth.date | 1619年 | accepted |
| bio.summary | 王沄（生于1619年），清人物。籍贯上海。（中国历代人物传记资料库 CBDB 71088） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沄（CBDB 71088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71088&o=json)
