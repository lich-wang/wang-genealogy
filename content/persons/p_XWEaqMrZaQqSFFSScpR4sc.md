---
schema: wang-person/v1
id: p_XWEaqMrZaQqSFFSScpR4sc
status: active
merged_into: null
display_name: 王冲之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kSa53GnwqQmxu7Fok4xPgT
        subject_person_id: p_XWEaqMrZaQqSFFSScpR4sc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冲之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_13jFDt724JS94WfEP1u4WY
          claim_id: c_kSa53GnwqQmxu7Fok4xPgT
          source_id: s_DecnzXJe2ZAhfbQyKAKoqM
          stance: supports
          locator: CBDB:151321
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151321）
          source: &a1
            id: s_DecnzXJe2ZAhfbQyKAKoqM
            source_type: api_record
            title: 中国历代人物传记资料库：王冲之（CBDB 151321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151321&o=json
            external_identifier: CBDB:151321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_684nYex9Cb2QzmkuM4JvBz
        subject_person_id: p_XWEaqMrZaQqSFFSScpR4sc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P8DQtFC99fofrNdHPdPmC8
          claim_id: c_684nYex9Cb2QzmkuM4JvBz
          source_id: s_DecnzXJe2ZAhfbQyKAKoqM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f45d7Z1bIBVeCvy1Gp2FH5
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XWEaqMrZaQqSFFSScpR4sc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9EYkjQghE10vnp0vDHtot5
          claim_id: c_f45d7Z1bIBVeCvy1Gp2FH5
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 62：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_35JFKhC7B9WWpbqPc5QvEr
            source_type: api_record
            title: 中国历代人物传记资料库：王子麟（CBDB 140337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140337&o=json
            external_identifier: CBDB:140337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6Ed3HaMSzFY5mCk231e1KC
        status: active
        display_name: 王子麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王冲之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冲之 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6Ed3HaMSzFY5mCk231e1KC | 王子麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冲之（CBDB 151321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151321&o=json)
- [中国历代人物传记资料库：王子麟（CBDB 140337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140337&o=json)
