---
schema: wang-person/v1
id: p_BBvMtaNAarHqeLAVUek5Lr
status: active
merged_into: null
display_name: 王慧增
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yJAyQmU6cP7Bwb9w1k9ngj
        subject_person_id: p_BBvMtaNAarHqeLAVUek5Lr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7D7Nv4rFAmr9AZ9qvK98sQ
          claim_id: c_yJAyQmU6cP7Bwb9w1k9ngj
          source_id: s_cdJyZ2MeGD4L13HBhJHepW
          stance: supports
          locator: CBDB:100197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100197）
          source: &a1
            id: s_cdJyZ2MeGD4L13HBhJHepW
            source_type: api_record
            title: 中国历代人物传记资料库：王慧增（CBDB 100197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100197&o=json
            external_identifier: CBDB:100197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_epkUdjrhdvq6AuQyDzZipn
        subject_person_id: p_BBvMtaNAarHqeLAVUek5Lr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧增，史料所见人物。本项目依据《中国历代人物传记资料库：王慧增（CBDB 100197）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TrzAIJDcipllm22flPTW9p
          claim_id: c_epkUdjrhdvq6AuQyDzZipn
          source_id: s_cdJyZ2MeGD4L13HBhJHepW
          stance: supports
          locator: CBDB:100197
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5QrTLxwnRmKYCeXRdV-Q9p
        subject_person_id: p_E1pwW8KQKxHvbvRAv7JQYh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BBvMtaNAarHqeLAVUek5Lr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8y0T-uJ6zivfI4s6VAx0CR
          claim_id: c_5QrTLxwnRmKYCeXRdV-Q9p
          source_id: s_cdJyZ2MeGD4L13HBhJHepW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1865, HuWenKai #252：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E1pwW8KQKxHvbvRAv7JQYh
        status: active
        display_name: 王愚軒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慧增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慧增 | accepted |
| bio.summary | 王慧增，史料所见人物。本项目依据《中国历代人物传记资料库：王慧增（CBDB 100197）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E1pwW8KQKxHvbvRAv7JQYh | 王愚軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慧增（CBDB 100197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100197&o=json)
