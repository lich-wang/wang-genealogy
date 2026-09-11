---
schema: wang-person/v1
id: p_2TPRm5az418XvdYKqFG6sc
status: active
merged_into: null
display_name: 王之采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DFbdJK8KGgQei5xMCHaRYS
        subject_person_id: p_2TPRm5az418XvdYKqFG6sc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3JydPv7VeXtM1AM94DwDoQ
          claim_id: c_DFbdJK8KGgQei5xMCHaRYS
          source_id: s_C8k9UFjsM2Y5RQeWvzKykG
          stance: supports
          locator: CBDB:124992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124992）
          source: &a1
            id: s_C8k9UFjsM2Y5RQeWvzKykG
            source_type: api_record
            title: 中国历代人物传记资料库：王之采（CBDB 124992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124992&o=json
            external_identifier: CBDB:124992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BvTtP6yPJvyTNwn3iuTXcg
        subject_person_id: p_2TPRm5az418XvdYKqFG6sc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之采，明人物。籍贯蒲州，入仕進士，曾任太常寺卿、左布政使。（中国历代人物传记资料库 CBDB 124992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3VVHEU84fPLorKv4jag9uk
          claim_id: c_BvTtP6yPJvyTNwn3iuTXcg
          source_id: s_C8k9UFjsM2Y5RQeWvzKykG
          stance: supports
          locator: CBDB:124992
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

# 王之采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之采 | accepted |
| bio.summary | 王之采，明人物。籍贯蒲州，入仕進士，曾任太常寺卿、左布政使。（中国历代人物传记资料库 CBDB 124992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之采（CBDB 124992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124992&o=json)
