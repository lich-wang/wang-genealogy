---
schema: wang-person/v1
id: p_HnPaGpWKz42coVDSPoCb3F
status: active
merged_into: null
display_name: 姚氏
revision: 1
cbdb_id: 121038
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SG1Q7NKFFvHjxNgxnMgVRC
        subject_person_id: p_HnPaGpWKz42coVDSPoCb3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 姚氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zFPfPPH4OVHsWqevWa93u4
          claim_id: c_SG1Q7NKFFvHjxNgxnMgVRC
          source_id: s_QzJ0BmGUZZ6vL5OYW-5uZ_
          stance: supports
          locator: CBDB:121038
          quotation: null
          interpretation_note: CBDB 明确记录的王紱配偶
          source: &a1
            id: s_QzJ0BmGUZZ6vL5OYW-5uZ_
            source_type: api_record
            title: 中国历代人物传记资料库：姚氏(王紱妻)（CBDB 121038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121038&o=json
            external_identifier: CBDB:121038
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
        id: c_mnIdX4-xIBRZl5ejtQMAN0
        subject_person_id: p_B1pzKXjLeBZBYHoiPKGriU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HnPaGpWKz42coVDSPoCb3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8evHuwlBrdWpT6hMfP_J_I
          claim_id: c_mnIdX4-xIBRZl5ejtQMAN0
          source_id: s_QzJ0BmGUZZ6vL5OYW-5uZ_
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4121, HuWenKai #132：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_B1pzKXjLeBZBYHoiPKGriU
        status: active
        display_name: 王紱
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 姚氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 姚氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_B1pzKXjLeBZBYHoiPKGriU | 王紱 | accepted |

## 外部来源

- [中国历代人物传记资料库：姚氏(王紱妻)（CBDB 121038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121038&o=json)
