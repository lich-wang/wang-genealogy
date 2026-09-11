---
schema: wang-person/v1
id: p_PBFPQF8RHgAbmdcKGVx1Z7
status: active
merged_into: null
display_name: 王癸甲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ijf4uNZk387AR8q2UhN6C
        subject_person_id: p_PBFPQF8RHgAbmdcKGVx1Z7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王癸甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LLMGoF4yvttjPRZFQ28yxe
          claim_id: c_7ijf4uNZk387AR8q2UhN6C
          source_id: s_3BPMpusrW4dMmmrtrDrVLs
          stance: supports
          locator: CBDB:639495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639495）
          source: &a1
            id: s_3BPMpusrW4dMmmrtrDrVLs
            source_type: api_record
            title: 中国历代人物传记资料库：王癸甲（CBDB 639495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639495&o=json
            external_identifier: CBDB:639495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_71BR4eALdVAJCtgUVayX2x
        subject_person_id: p_PBFPQF8RHgAbmdcKGVx1Z7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王癸甲，清人物。籍贯儋州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7a5zritZ1CNr6hGZzRKjKu
          claim_id: c_71BR4eALdVAJCtgUVayX2x
          source_id: s_3BPMpusrW4dMmmrtrDrVLs
          stance: supports
          locator: CBDB:639495
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

# 王癸甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王癸甲 | accepted |
| bio.summary | 王癸甲，清人物。籍贯儋州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王癸甲（CBDB 639495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639495&o=json)
