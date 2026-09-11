---
schema: wang-person/v1
id: p_JstbVeQ72pNAP4UCgVSeHP
status: active
merged_into: null
display_name: 王碧珠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s9o8XFYAiZUy6dLhXF9W7Q
        subject_person_id: p_JstbVeQ72pNAP4UCgVSeHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧珠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4AUmFyFjNLZV27NDiC8C51
          claim_id: c_s9o8XFYAiZUy6dLhXF9W7Q
          source_id: s_bCCAswtszrBm6CPur5YyFK
          stance: supports
          locator: CBDB:54280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54280）
          source: &a1
            id: s_bCCAswtszrBm6CPur5YyFK
            source_type: api_record
            title: 中国历代人物传记资料库：王碧珠（CBDB 54280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54280&o=json
            external_identifier: CBDB:54280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.720Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HRtPkth15DjJTCqYwJJM41
        subject_person_id: p_JstbVeQ72pNAP4UCgVSeHP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王碧珠，史料所见人物。本项目依据《中国历代人物传记资料库：王碧珠（CBDB 54280）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MRGvJXURXycs-ELrmSz03-
          claim_id: c_HRtPkth15DjJTCqYwJJM41
          source_id: s_bCCAswtszrBm6CPur5YyFK
          stance: supports
          locator: CBDB:54280
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RGq9A1jTixTpFbhw90Geav
        subject_person_id: p_JstbVeQ72pNAP4UCgVSeHP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hJ8QkYA1HsH1YXZV6nux8K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_amOlKtHVMV1c82TeAQJCSP
          claim_id: c_RGq9A1jTixTpFbhw90Geav
          source_id: s_-YlcUcMpfNsDOljs2uvC75
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1895：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-YlcUcMpfNsDOljs2uvC75
            source_type: api_record
            title: 中国历代人物传记资料库：汪穀（CBDB 79238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=79238&o=json
            external_identifier: CBDB:79238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hJ8QkYA1HsH1YXZV6nux8K
        status: active
        display_name: 汪穀
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王碧珠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王碧珠 | accepted |
| bio.summary | 王碧珠，史料所见人物。本项目依据《中国历代人物传记资料库：王碧珠（CBDB 54280）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hJ8QkYA1HsH1YXZV6nux8K | 汪穀 | accepted |

## 外部来源

- [中国历代人物传记资料库：汪穀（CBDB 79238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=79238&o=json)
- [中国历代人物传记资料库：王碧珠（CBDB 54280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54280&o=json)
