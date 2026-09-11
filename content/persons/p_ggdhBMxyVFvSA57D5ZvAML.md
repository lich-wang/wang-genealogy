---
schema: wang-person/v1
id: p_ggdhBMxyVFvSA57D5ZvAML
status: active
merged_into: null
display_name: 王承恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yDQn3Rak2G3VHpzQrwodWU
        subject_person_id: p_ggdhBMxyVFvSA57D5ZvAML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_668VZktsGmuaDtwXrp2JXW
          claim_id: c_yDQn3Rak2G3VHpzQrwodWU
          source_id: s_LF7Gepz93DN2M78E89kArK
          stance: supports
          locator: CBDB:453557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453557）
          source: &a1
            id: s_LF7Gepz93DN2M78E89kArK
            source_type: api_record
            title: 中国历代人物传记资料库：王承恩（CBDB 453557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453557&o=json
            external_identifier: CBDB:453557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BfsmhDm1qzydw9nHKsusg
        subject_person_id: p_ggdhBMxyVFvSA57D5ZvAML
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承恩，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 453557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ds0VKqFn443qnplav2K32O
          claim_id: c_9BfsmhDm1qzydw9nHKsusg
          source_id: s_LF7Gepz93DN2M78E89kArK
          stance: supports
          locator: CBDB:453557
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

# 王承恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承恩 | accepted |
| bio.summary | 王承恩，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 453557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承恩（CBDB 453557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453557&o=json)
