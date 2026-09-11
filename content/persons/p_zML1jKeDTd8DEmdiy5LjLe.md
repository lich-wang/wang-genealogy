---
schema: wang-person/v1
id: p_zML1jKeDTd8DEmdiy5LjLe
status: active
merged_into: null
display_name: 王汝霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8nJG1KJKUvSQxtejb5rUV
        subject_person_id: p_zML1jKeDTd8DEmdiy5LjLe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BKps4vF25ALC8muac5HSSu
          claim_id: c_z8nJG1KJKUvSQxtejb5rUV
          source_id: s_6QDWj6mhMiaDSvKZ41Rfxd
          stance: supports
          locator: CBDB:540855
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540855）
          source: &a1
            id: s_6QDWj6mhMiaDSvKZ41Rfxd
            source_type: api_record
            title: 中国历代人物传记资料库：王汝霖（CBDB 540855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540855&o=json
            external_identifier: CBDB:540855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9dGoF38BLpPyd6GpB8So9S
        subject_person_id: p_zML1jKeDTd8DEmdiy5LjLe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝霖，宋人物。籍贯潤州，入仕進士。（中国历代人物传记资料库 CBDB 540855）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2uumBSHQedJzwvxXIbHqAI
          claim_id: c_9dGoF38BLpPyd6GpB8So9S
          source_id: s_6QDWj6mhMiaDSvKZ41Rfxd
          stance: supports
          locator: CBDB:540855
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

# 王汝霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝霖 | accepted |
| bio.summary | 王汝霖，宋人物。籍贯潤州，入仕進士。（中国历代人物传记资料库 CBDB 540855） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝霖（CBDB 540855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540855&o=json)
