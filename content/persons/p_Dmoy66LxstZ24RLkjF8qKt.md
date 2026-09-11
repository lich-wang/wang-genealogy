---
schema: wang-person/v1
id: p_Dmoy66LxstZ24RLkjF8qKt
status: active
merged_into: null
display_name: 王升
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2Xr2hgNyut7MNsMeprgc8g
        subject_person_id: p_Dmoy66LxstZ24RLkjF8qKt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VhSnahKGB1jj5FuWyE4AXQ
          claim_id: c_2Xr2hgNyut7MNsMeprgc8g
          source_id: s_BnPKsABXrLr11M9Va3gRo7
          stance: supports
          locator: CBDB:280914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280914）
          source: &a1
            id: s_BnPKsABXrLr11M9Va3gRo7
            source_type: api_record
            title: 中国历代人物传记资料库：王升（CBDB 280914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280914&o=json
            external_identifier: CBDB:280914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.024Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i17HH8KT8tG8cE2bNdg8wj
        subject_person_id: p_Dmoy66LxstZ24RLkjF8qKt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ugoV33DJXgXhDbGX3XqxJQ
          claim_id: c_i17HH8KT8tG8cE2bNdg8wj
          source_id: s_BnPKsABXrLr11M9Va3gRo7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_2a8VodHRnr6lvUgkMRaX2o
        subject_person_id: p_Dmoy66LxstZ24RLkjF8qKt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qC31C42hD4UK4m3NDzMPZB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wi_d5hpgNp4Dlro6r7TqOc
          claim_id: c_2a8VodHRnr6lvUgkMRaX2o
          source_id: s_BnPKsABXrLr11M9Va3gRo7
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qC31C42hD4UK4m3NDzMPZB
        status: active
        display_name: 王暐
        merged_into_person_id: null
  other: []
---

# 王升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王升 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qC31C42hD4UK4m3NDzMPZB | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王升（CBDB 280914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280914&o=json)
