---
schema: wang-person/v1
id: p_6rmKu2tnL9PKGQ8F3tuNWr
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pJRnKGaYiB5Syk53YX9GGi
        subject_person_id: p_6rmKu2tnL9PKGQ8F3tuNWr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FAmPGpSDUWMDB6XcAVQNYM
          claim_id: c_pJRnKGaYiB5Syk53YX9GGi
          source_id: s_A7xexE5aVh379G43ECbPjB
          stance: supports
          locator: CBDB:301917
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301917）
          source: &a1
            id: s_A7xexE5aVh379G43ECbPjB
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 301917）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301917&o=json
            external_identifier: CBDB:301917
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_REfTiNxpnLDtv7t5DL9BGL
        subject_person_id: p_6rmKu2tnL9PKGQ8F3tuNWr
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
        - id: cs_s8A2Wu4NaDZCY1vE8zTeNx
          claim_id: c_REfTiNxpnLDtv7t5DL9BGL
          source_id: s_A7xexE5aVh379G43ECbPjB
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
        id: c_yftC2SwqY3OTd1_JhFGZFU
        subject_person_id: p_6rmKu2tnL9PKGQ8F3tuNWr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPwYn3svBF5ArNmlIFKTJq
          claim_id: c_yftC2SwqY3OTd1_JhFGZFU
          source_id: s_A7xexE5aVh379G43ECbPjB
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_q65LjSR3e6s3Y3D1bpqPNS
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_q65LjSR3e6s3Y3D1bpqPNS | 王崇義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 301917）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301917&o=json)
