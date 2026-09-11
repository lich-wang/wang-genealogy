---
schema: wang-person/v1
id: p_Xb95W9BCZ9vtgbmXciAhao
status: active
merged_into: null
display_name: 李氏
revision: 1
cbdb_id: 147696
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ipHkINDjPLnOBVY6sZ1vCL
        subject_person_id: p_Xb95W9BCZ9vtgbmXciAhao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--5IFnVTpLzm3gRIa4Ef4e
          claim_id: c_ipHkINDjPLnOBVY6sZ1vCL
          source_id: s_miSFwhWhYvpxmYKMqj2uQf
          stance: supports
          locator: CBDB:147696
          quotation: null
          interpretation_note: CBDB 明确记录的王寬配偶
          source: &a1
            id: s_miSFwhWhYvpxmYKMqj2uQf
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王寬妻)（CBDB 147696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147696&o=json
            external_identifier: CBDB:147696
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
        id: c_ZWlJDJUSbR2_56rTqHwl0-
        subject_person_id: p_ZYRF7rCLnSBQMyH9ME8MXV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xb95W9BCZ9vtgbmXciAhao
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGlriKQApqAElxafx5hEpl
          claim_id: c_ZWlJDJUSbR2_56rTqHwl0-
          source_id: s_miSFwhWhYvpxmYKMqj2uQf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 2：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZYRF7rCLnSBQMyH9ME8MXV
        status: active
        display_name: 王寬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 李氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ZYRF7rCLnSBQMyH9ME8MXV | 王寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王寬妻)（CBDB 147696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147696&o=json)
