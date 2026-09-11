---
schema: wang-person/v1
id: p_vNe1fL6jhpm5RVZXtC8Gpv
status: active
merged_into: null
display_name: 王綖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NYrcesFDnvmh75hSRt1eDT
        subject_person_id: p_vNe1fL6jhpm5RVZXtC8Gpv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_riJDVp86x332Aeh19MdMqb
          claim_id: c_NYrcesFDnvmh75hSRt1eDT
          source_id: s_FFFrPiCpc1vyWWPTUKT8xn
          stance: supports
          locator: CBDB:551340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551340）
          source: &a1
            id: s_FFFrPiCpc1vyWWPTUKT8xn
            source_type: api_record
            title: 中国历代人物传记资料库：王綖（CBDB 551340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551340&o=json
            external_identifier: CBDB:551340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z682Nc44RmJV9o42zvL1Sn
        subject_person_id: p_vNe1fL6jhpm5RVZXtC8Gpv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綖，明人物。籍贯山陰，入仕太學生，曾任王府長史。（中国历代人物传记资料库 CBDB 551340）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-0XYaj9ecHuYqT6cGzSVe0
          claim_id: c_z682Nc44RmJV9o42zvL1Sn
          source_id: s_FFFrPiCpc1vyWWPTUKT8xn
          stance: supports
          locator: CBDB:551340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uwKaNVNtJhuKsU1dR6UVsx
        subject_person_id: p_aHiY2a3fZHi8uhGv4QVxVg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vNe1fL6jhpm5RVZXtC8Gpv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AwWavaxvA9T4a1shwhFVz7
          claim_id: c_uwKaNVNtJhuKsU1dR6UVsx
          source_id: s_31AuVxQMh9N6VSb38yAxgv
          stance: supports
          locator: 紹興府志:八十卷，Igid=315915：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_31AuVxQMh9N6VSb38yAxgv
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 126830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126830&o=json
            external_identifier: CBDB:126830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aHiY2a3fZHi8uhGv4QVxVg
        status: active
        display_name: 王暹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綖 | accepted |
| bio.summary | 王綖，明人物。籍贯山陰，入仕太學生，曾任王府長史。（中国历代人物传记资料库 CBDB 551340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aHiY2a3fZHi8uhGv4QVxVg | 王暹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暹（CBDB 126830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126830&o=json)
- [中国历代人物传记资料库：王綖（CBDB 551340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551340&o=json)
