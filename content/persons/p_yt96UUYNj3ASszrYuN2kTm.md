---
schema: wang-person/v1
id: p_yt96UUYNj3ASszrYuN2kTm
status: active
merged_into: null
display_name: 王嘉賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AsbayV9D3m1KCuKxzDbUnB
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6bJVQwQqMAEBPB3vxnR7P2
          claim_id: c_AsbayV9D3m1KCuKxzDbUnB
          source_id: s_pjiMN3MNeFkrPLyQw4AKd9
          stance: supports
          locator: CBDB:207120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207120）
          source: &a1
            id: s_pjiMN3MNeFkrPLyQw4AKd9
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 207120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207120&o=json
            external_identifier: CBDB:207120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kU94PbgJsw84kDSj7Pc3V4
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgSFzyjWmfUqAJ3BjF83VF
          claim_id: c_kU94PbgJsw84kDSj7Pc3V4
          source_id: s_pjiMN3MNeFkrPLyQw4AKd9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XBX1agff1Tw1bf67rgrUck
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
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
        - id: cs_gbeQ22U5ZZbTJ6uYbfp1o5
          claim_id: c_XBX1agff1Tw1bf67rgrUck
          source_id: s_pjiMN3MNeFkrPLyQw4AKd9
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
  ancestors:
    - claim:
        id: c_jKn94yQPVnJjr3DyaPrC93
        subject_person_id: p_3ELQPBBWviZRmVrPZwBPKE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yt96UUYNj3ASszrYuN2kTm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbgmQLzdC0ow8FX-d6PbWp
          claim_id: c_jKn94yQPVnJjr3DyaPrC93
          source_id: s_psH1mztdPrjAXLN1kMWfLt
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_psH1mztdPrjAXLN1kMWfLt
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 227985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227985&o=json
            external_identifier: CBDB:227985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3ELQPBBWviZRmVrPZwBPKE
        status: active
        display_name: 王安
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嘉賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉賓 | accepted |
| birth.date | 1558年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3ELQPBBWviZRmVrPZwBPKE | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 227985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227985&o=json)
- [中国历代人物传记资料库：王嘉賓（CBDB 207120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207120&o=json)
