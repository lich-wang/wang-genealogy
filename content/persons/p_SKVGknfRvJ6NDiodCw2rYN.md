---
schema: wang-person/v1
id: p_SKVGknfRvJ6NDiodCw2rYN
status: active
merged_into: null
display_name: 狄氏
revision: 1
cbdb_id: 162533
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CW6K3nY_KXC5Jkg8D122lX
        subject_person_id: p_SKVGknfRvJ6NDiodCw2rYN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 狄氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RBNAAYM97oUiICUg6TvzpE
          claim_id: c_CW6K3nY_KXC5Jkg8D122lX
          source_id: s_P5U3DqPi6-FpDdfUrbQYLl
          stance: supports
          locator: CBDB:162533
          quotation: null
          interpretation_note: CBDB 明确记录的王韋配偶
          source: &a1
            id: s_P5U3DqPi6-FpDdfUrbQYLl
            source_type: api_record
            title: 中国历代人物传记资料库：狄氏(王韋妻)（CBDB 162533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162533&o=json
            external_identifier: CBDB:162533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XbxL4kZFl4uwVJqRwxcUuN
        subject_person_id: p_i47UsMhA15jMqEZ7iDqoa7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SKVGknfRvJ6NDiodCw2rYN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L85FHgGjBZ-mbOP3zcWBSO
          claim_id: c_XbxL4kZFl4uwVJqRwxcUuN
          source_id: s_P5U3DqPi6-FpDdfUrbQYLl
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng24：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i47UsMhA15jMqEZ7iDqoa7
        status: active
        display_name: 王韋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 狄氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 狄氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_i47UsMhA15jMqEZ7iDqoa7 | 王韋 | accepted |

## 外部来源

- [中国历代人物传记资料库：狄氏(王韋妻)（CBDB 162533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162533&o=json)
