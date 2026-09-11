---
schema: wang-person/v1
id: p_iHfF8Zc6wm4dMrBPh4cwUf
status: active
merged_into: null
display_name: 王玷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HGP1MUyuMPs8qQCAtBsujA
        subject_person_id: p_iHfF8Zc6wm4dMrBPh4cwUf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uydVGQWut6VkURhttwLByr
          claim_id: c_HGP1MUyuMPs8qQCAtBsujA
          source_id: s_BJ7joWpMikGnwBB1xGdqDa
          stance: supports
          locator: CBDB:639393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639393）
          source: &a1
            id: s_BJ7joWpMikGnwBB1xGdqDa
            source_type: api_record
            title: 中国历代人物传记资料库：王玷（CBDB 639393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639393&o=json
            external_identifier: CBDB:639393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KQGhsCffPy96DeZEyUcJBK
        subject_person_id: p_iHfF8Zc6wm4dMrBPh4cwUf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玷，清人物。籍贯武定直隸州，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639393）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p4dkFfVWBVk84oYI3he6zu
          claim_id: c_KQGhsCffPy96DeZEyUcJBK
          source_id: s_BJ7joWpMikGnwBB1xGdqDa
          stance: supports
          locator: CBDB:639393
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

# 王玷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玷 | accepted |
| bio.summary | 王玷，清人物。籍贯武定直隸州，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玷（CBDB 639393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639393&o=json)
