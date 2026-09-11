---
schema: wang-person/v1
id: p_2p9yiA1B1x4ffXDvMXE5Jp
status: active
merged_into: null
display_name: 王元賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4f7uMCxGkKHjT35WCJxzy
        subject_person_id: p_2p9yiA1B1x4ffXDvMXE5Jp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CkfQWvBLecBo6LzVa4EPAZ
          claim_id: c_L4f7uMCxGkKHjT35WCJxzy
          source_id: s_roJ77trDMy2z5rWAdW869m
          stance: supports
          locator: CBDB:152399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152399）
          source: &a1
            id: s_roJ77trDMy2z5rWAdW869m
            source_type: api_record
            title: 中国历代人物传记资料库：王元賓（CBDB 152399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152399&o=json
            external_identifier: CBDB:152399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JvwvHHt58SXoX4AWpn1Mvh
        subject_person_id: p_2p9yiA1B1x4ffXDvMXE5Jp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_njukY2DG54E6BLWVTVCtVc
          claim_id: c_JvwvHHt58SXoX4AWpn1Mvh
          source_id: s_roJ77trDMy2z5rWAdW869m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sg28vf976MYDe2IX_LPp6V
        subject_person_id: p_H5XJ9wsBqaUG7iLGVt5LMg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2p9yiA1B1x4ffXDvMXE5Jp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lxRp2oEBRLzBkHeT7oFGQ1
          claim_id: c_sg28vf976MYDe2IX_LPp6V
          source_id: s_roJ77trDMy2z5rWAdW869m
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 340：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_H5XJ9wsBqaUG7iLGVt5LMg
        status: active
        display_name: 王崇禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元賓 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H5XJ9wsBqaUG7iLGVt5LMg | 王崇禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元賓（CBDB 152399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152399&o=json)
