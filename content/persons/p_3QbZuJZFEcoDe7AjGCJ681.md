---
schema: wang-person/v1
id: p_3QbZuJZFEcoDe7AjGCJ681
status: active
merged_into: null
display_name: 王玄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gktnocqqwTg6BjMThnssMW
        subject_person_id: p_3QbZuJZFEcoDe7AjGCJ681
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yRgnCGQHqt9JtTk9JCx9Wn
          claim_id: c_gktnocqqwTg6BjMThnssMW
          source_id: s_ZZQyG74uPHM2hTgu5Hd8PV
          stance: supports
          locator: CBDB:95122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（95122）
          source: &a1
            id: s_ZZQyG74uPHM2hTgu5Hd8PV
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 95122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95122&o=json
            external_identifier: CBDB:95122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_25SmgpGT7FiTbgdMEXQw31
        subject_person_id: p_3QbZuJZFEcoDe7AjGCJ681
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄，唐人物。籍贯桂州，身份为詩人。（中国历代人物传记资料库 CBDB 95122）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BnibdJPNhYvCB1dXOe3s1F
          claim_id: c_25SmgpGT7FiTbgdMEXQw31
          source_id: s_ZZQyG74uPHM2hTgu5Hd8PV
          stance: supports
          locator: CBDB:95122
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

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄 | accepted |
| bio.summary | 王玄，唐人物。籍贯桂州，身份为詩人。（中国历代人物传记资料库 CBDB 95122） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄（CBDB 95122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=95122&o=json)
