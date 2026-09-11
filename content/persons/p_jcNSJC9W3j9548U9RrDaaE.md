---
schema: wang-person/v1
id: p_jcNSJC9W3j9548U9RrDaaE
status: active
merged_into: null
display_name: 王承爵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AL7JrWH94RNjxRKnamUjMv
        subject_person_id: p_jcNSJC9W3j9548U9RrDaaE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ayp9eN5wbvVRtLE7f9U1ZH
          claim_id: c_AL7JrWH94RNjxRKnamUjMv
          source_id: s_ezTazQjihmB2w6hk3jCbpw
          stance: supports
          locator: CBDB:526836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526836）
          source: &a1
            id: s_ezTazQjihmB2w6hk3jCbpw
            source_type: api_record
            title: 中国历代人物传记资料库：王承爵（CBDB 526836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526836&o=json
            external_identifier: CBDB:526836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75GHmp2PCZZURgPBMcvLYs
        subject_person_id: p_jcNSJC9W3j9548U9RrDaaE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QUBDFPZRRkAYEQyPFt2ztF
          claim_id: c_75GHmp2PCZZURgPBMcvLYs
          source_id: s_ezTazQjihmB2w6hk3jCbpw
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
        id: c_lCmoxlVGvc73pQvyPd_EsL
        subject_person_id: p_jcNSJC9W3j9548U9RrDaaE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aVUmmanLtXb3jpHVbXRgYK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCDVlEjJO2u9fiumQR-5ta
          claim_id: c_lCmoxlVGvc73pQvyPd_EsL
          source_id: s_ezTazQjihmB2w6hk3jCbpw
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13023：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aVUmmanLtXb3jpHVbXRgYK
        status: active
        display_name: 王時翔
        merged_into_person_id: null
  other: []
---

# 王承爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承爵 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aVUmmanLtXb3jpHVbXRgYK | 王時翔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承爵（CBDB 526836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526836&o=json)
