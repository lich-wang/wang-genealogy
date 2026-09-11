---
schema: wang-person/v1
id: p_F7F5PHZMcFFP7Vhen1t1gW
status: active
merged_into: null
display_name: 王思才
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rN2c23KdksEWgxbLE483ub
        subject_person_id: p_F7F5PHZMcFFP7Vhen1t1gW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JXS4MLWjjBNdRTgr34JLxq
          claim_id: c_rN2c23KdksEWgxbLE483ub
          source_id: s_1U5UQqqNBjKuPe8P6jv1Jd
          stance: supports
          locator: CBDB:637798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637798）
          source: &a1
            id: s_1U5UQqqNBjKuPe8P6jv1Jd
            source_type: api_record
            title: 中国历代人物传记资料库：王思才（CBDB 637798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637798&o=json
            external_identifier: CBDB:637798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nB1Krn2fFDF8NBZ6fxqKzY
        subject_person_id: p_F7F5PHZMcFFP7Vhen1t1gW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思才，清人物。籍贯四川省，入仕行伍，曾任後營遊擊。（中国历代人物传记资料库 CBDB 637798）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X4mDAi3B87YN1o1rT7jlvu
          claim_id: c_nB1Krn2fFDF8NBZ6fxqKzY
          source_id: s_1U5UQqqNBjKuPe8P6jv1Jd
          stance: supports
          locator: CBDB:637798
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

# 王思才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思才 | accepted |
| bio.summary | 王思才，清人物。籍贯四川省，入仕行伍，曾任後營遊擊。（中国历代人物传记资料库 CBDB 637798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思才（CBDB 637798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637798&o=json)
