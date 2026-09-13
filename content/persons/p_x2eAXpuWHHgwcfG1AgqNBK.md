---
schema: wang-person/v1
id: p_x2eAXpuWHHgwcfG1AgqNBK
status: active
merged_into: null
display_name: 王克一
cbdb_id: 413944
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cvuhVdurpCd2Mnkmn1NS5J
        subject_person_id: p_x2eAXpuWHHgwcfG1AgqNBK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克一，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 413944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3Wagr_h5xIZ7ZfgwyZjmWu
          claim_id: c_cvuhVdurpCd2Mnkmn1NS5J
          source_id: s_WZMDAEri7pB5DZzX4EShLd
          stance: supports
          locator: CBDB:413944
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WZMDAEri7pB5DZzX4EShLd
            source_type: api_record
            title: 中国历代人物传记资料库：王克一（CBDB 413944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413944&o=json
            external_identifier: CBDB:413944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:26.305Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XKp9PtdkGQTvh7EmsPBMSp
        subject_person_id: p_x2eAXpuWHHgwcfG1AgqNBK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PPjq2VeJfBohYTHe8QXUZY
          claim_id: c_XKp9PtdkGQTvh7EmsPBMSp
          source_id: s_WZMDAEri7pB5DZzX4EShLd
          stance: supports
          locator: CBDB:413944
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5101-5200）｜历史性依据：CBDB 朝代 = 明
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

# 王克一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克一，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 413944） | accepted |
| name.primary | 王克一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克一（CBDB 413944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413944&o=json)
