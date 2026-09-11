---
schema: wang-person/v1
id: p_w8GM5VRtWFi6BF4wkBPgK7
status: active
merged_into: null
display_name: 王端甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n5mCaL19qyhh7xm1i9PmMe
        subject_person_id: p_w8GM5VRtWFi6BF4wkBPgK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ER1mF6aqAkp63UznXukHuv
          claim_id: c_n5mCaL19qyhh7xm1i9PmMe
          source_id: s_NvU32k9hTAJ9UoGB7z5FTc
          stance: supports
          locator: CBDB:688107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688107）
          source: &a1
            id: s_NvU32k9hTAJ9UoGB7z5FTc
            source_type: api_record
            title: 中国历代人物传记资料库：王端甫（CBDB 688107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688107&o=json
            external_identifier: CBDB:688107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y8XZvpntVbpKdd9ezhfsMB
        subject_person_id: p_w8GM5VRtWFi6BF4wkBPgK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端甫，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 688107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uiYa3-S62AJALFjtCHSWlw
          claim_id: c_y8XZvpntVbpKdd9ezhfsMB
          source_id: s_NvU32k9hTAJ9UoGB7z5FTc
          stance: supports
          locator: CBDB:688107
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

# 王端甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端甫 | accepted |
| bio.summary | 王端甫，宋人物。籍贯閩縣，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 688107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端甫（CBDB 688107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688107&o=json)
