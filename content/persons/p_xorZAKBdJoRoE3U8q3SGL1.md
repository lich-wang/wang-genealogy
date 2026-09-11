---
schema: wang-person/v1
id: p_xorZAKBdJoRoE3U8q3SGL1
status: active
merged_into: null
display_name: 王三姑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xtFyt5zBGYru1Y7BK4z1G2
        subject_person_id: p_xorZAKBdJoRoE3U8q3SGL1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三姑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NX2ZSnJFGprmWEeM2gFWR8
          claim_id: c_xtFyt5zBGYru1Y7BK4z1G2
          source_id: s_7BLgDTn5AJH9CXsJaaFr5e
          stance: supports
          locator: CBDB:571934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571934）
          source: &a1
            id: s_7BLgDTn5AJH9CXsJaaFr5e
            source_type: api_record
            title: 中国历代人物传记资料库：王三姑（CBDB 571934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571934&o=json
            external_identifier: CBDB:571934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BBnQwAuZkFsWScAYQ9Ea4a
        subject_person_id: p_xorZAKBdJoRoE3U8q3SGL1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三姑，清人物。籍贯上虞，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 571934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wuekUliQIMIa8BgjN1Mskw
          claim_id: c_BBnQwAuZkFsWScAYQ9Ea4a
          source_id: s_7BLgDTn5AJH9CXsJaaFr5e
          stance: supports
          locator: CBDB:571934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aC4DQCMab0owcp4HmhXe8d
        subject_person_id: p_kkcDjFWAdTrMcKDVDJEh6n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xorZAKBdJoRoE3U8q3SGL1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NdXFN5mWTjYpb-xvzIsu6P
          claim_id: c_aC4DQCMab0owcp4HmhXe8d
          source_id: s_7BLgDTn5AJH9CXsJaaFr5e
          stance: supports
          locator: 紹興府志:八十卷，lgid=316916：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kkcDjFWAdTrMcKDVDJEh6n
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三姑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三姑 | accepted |
| bio.summary | 王三姑，清人物。籍贯上虞，身份为孝子/孝女。（中国历代人物传记资料库 CBDB 571934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kkcDjFWAdTrMcKDVDJEh6n | 王廷相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三姑（CBDB 571934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571934&o=json)
