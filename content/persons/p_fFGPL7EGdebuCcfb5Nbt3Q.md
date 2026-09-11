---
schema: wang-person/v1
id: p_fFGPL7EGdebuCcfb5Nbt3Q
status: active
merged_into: null
display_name: 王楙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BRNrg2SL7vw6ULrEzKnfko
        subject_person_id: p_fFGPL7EGdebuCcfb5Nbt3Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6QMskY6PARcQrJeKNXBXu9
          claim_id: c_BRNrg2SL7vw6ULrEzKnfko
          source_id: s_RyiwdZGus7662Gv5FSrwFv
          stance: supports
          locator: CBDB:638759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638759）
          source: &a1
            id: s_RyiwdZGus7662Gv5FSrwFv
            source_type: api_record
            title: 中国历代人物传记资料库：王楙（CBDB 638759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638759&o=json
            external_identifier: CBDB:638759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VTJkQbXBun2ennQVhUgQw9
        subject_person_id: p_fFGPL7EGdebuCcfb5Nbt3Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙，清人物。籍贯睢州，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 638759）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sWvoupXRsH1-9kRksbsT6z
          claim_id: c_VTJkQbXBun2ennQVhUgQw9
          source_id: s_RyiwdZGus7662Gv5FSrwFv
          stance: supports
          locator: CBDB:638759
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

# 王楙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楙 | accepted |
| bio.summary | 王楙，清人物。籍贯睢州，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 638759） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楙（CBDB 638759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638759&o=json)
