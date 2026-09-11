---
schema: wang-person/v1
id: p_66DsrnbJjRCN24DcWrTbM3
status: active
merged_into: null
display_name: 王煥典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4xXZfomUMDPzmiHGuq93aC
        subject_person_id: p_66DsrnbJjRCN24DcWrTbM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j6o3enw8VLfhyKKxePtZAP
          claim_id: c_4xXZfomUMDPzmiHGuq93aC
          source_id: s_7CMSaHtk9Gy28j4DugDKiq
          stance: supports
          locator: CBDB:639299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639299）
          source: &a1
            id: s_7CMSaHtk9Gy28j4DugDKiq
            source_type: api_record
            title: 中国历代人物传记资料库：王煥典（CBDB 639299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639299&o=json
            external_identifier: CBDB:639299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cVdn77hz94cwMY8zb7F7R4
        subject_person_id: p_66DsrnbJjRCN24DcWrTbM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王煥典，清人物。籍贯忻州直隸州直轄地方，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639299）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ok808pG3wDG-UwcsBOsZJV
          claim_id: c_cVdn77hz94cwMY8zb7F7R4
          source_id: s_7CMSaHtk9Gy28j4DugDKiq
          stance: supports
          locator: CBDB:639299
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

# 王煥典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥典 | accepted |
| bio.summary | 王煥典，清人物。籍贯忻州直隸州直轄地方，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639299） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥典（CBDB 639299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639299&o=json)
