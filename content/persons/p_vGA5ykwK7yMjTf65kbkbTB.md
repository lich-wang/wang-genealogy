---
schema: wang-person/v1
id: p_vGA5ykwK7yMjTf65kbkbTB
status: active
merged_into: null
display_name: 王紹隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hr2UjaKh92TRS5rW1sydz2
        subject_person_id: p_vGA5ykwK7yMjTf65kbkbTB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8f167pBZareH49NRPX2hZQ
          claim_id: c_hr2UjaKh92TRS5rW1sydz2
          source_id: s_TmTwUEEoCPeHP214YyTH6x
          stance: supports
          locator: CBDB:342430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342430）
          source: &a1
            id: s_TmTwUEEoCPeHP214YyTH6x
            source_type: api_record
            title: 中国历代人物传记资料库：王紹隆（CBDB 342430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342430&o=json
            external_identifier: CBDB:342430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S67DKZk9Pi1WXzd32o7K3d
        subject_person_id: p_vGA5ykwK7yMjTf65kbkbTB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹隆，清人物。明清進士進士，籍贯海寧州，身份为詩人，入仕進士。（中国历代人物传记资料库 CBDB 342430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ou9bagxE4VaQZwc8j60YoH
          claim_id: c_S67DKZk9Pi1WXzd32o7K3d
          source_id: s_TmTwUEEoCPeHP214YyTH6x
          stance: supports
          locator: CBDB:342430
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

# 王紹隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹隆 | accepted |
| bio.summary | 王紹隆，清人物。明清進士進士，籍贯海寧州，身份为詩人，入仕進士。（中国历代人物传记资料库 CBDB 342430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹隆（CBDB 342430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342430&o=json)
