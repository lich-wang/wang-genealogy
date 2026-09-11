---
schema: wang-person/v1
id: p_imqN7hPEKAuksBGAHFpbax
status: active
merged_into: null
display_name: 王耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xGTKrwgirHJVgi7k9VonEJ
        subject_person_id: p_imqN7hPEKAuksBGAHFpbax
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F9C4SdSAJHWvJCcm52pzS4
          claim_id: c_xGTKrwgirHJVgi7k9VonEJ
          source_id: s_Hbh5j2a7uGE5i47wP19WRo
          stance: supports
          locator: CBDB:123612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123612）
          source: &a1
            id: s_Hbh5j2a7uGE5i47wP19WRo
            source_type: api_record
            title: 中国历代人物传记资料库：王耀（CBDB 123612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123612&o=json
            external_identifier: CBDB:123612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EAEfQZSQcA37xJEUu7U1EJ
        subject_person_id: p_imqN7hPEKAuksBGAHFpbax
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MJmEBmE9kqFAv3zE9Kt2bf
          claim_id: c_EAEfQZSQcA37xJEUu7U1EJ
          source_id: s_Hbh5j2a7uGE5i47wP19WRo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HpJP7DPtjFJ35FomnrXy3U
        subject_person_id: p_imqN7hPEKAuksBGAHFpbax
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀（卒于1798年），清人物。籍贯安西直隸州，入仕行伍，曾任營千總。（中国历代人物传记资料库 CBDB 123612）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HWmgN2SHb57hdyOs5u0vgL
          claim_id: c_HpJP7DPtjFJ35FomnrXy3U
          source_id: s_Hbh5j2a7uGE5i47wP19WRo
          stance: supports
          locator: CBDB:123612
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

# 王耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | 王耀（卒于1798年），清人物。籍贯安西直隸州，入仕行伍，曾任營千總。（中国历代人物传记资料库 CBDB 123612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀（CBDB 123612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123612&o=json)
