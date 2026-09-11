---
schema: wang-person/v1
id: p_A2RNKt5PKDSvSHAbDzXb9c
status: active
merged_into: null
display_name: 王亮楨
cbdb_id: 526805
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L3NMoy5PHEDL3ZfHsRH8hu
        subject_person_id: p_A2RNKt5PKDSvSHAbDzXb9c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮楨，清人物。中国历代人物传记资料库（CBDB）以人物编号 526805 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_PVQY0i-p3DNRggBW5Gskb1
          claim_id: c_L3NMoy5PHEDL3ZfHsRH8hu
          source_id: s_bcsQ6AMVduzF5mqMMJgQea
          stance: supports
          locator: CBDB:526805
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bcsQ6AMVduzF5mqMMJgQea
            source_type: api_record
            title: 中国历代人物传记资料库：王亮楨（CBDB 526805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526805&o=json
            external_identifier: CBDB:526805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UGFvTXtyxFRhuxBERC2Fe1
        subject_person_id: p_A2RNKt5PKDSvSHAbDzXb9c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_n6mDWmEwtinYMYN52TazHW
          claim_id: c_UGFvTXtyxFRhuxBERC2Fe1
          source_id: s_bcsQ6AMVduzF5mqMMJgQea
          stance: supports
          locator: CBDB:526805
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_bcsQ6AMVduzF5mqMMJgQea
            source_type: api_record
            title: 中国历代人物传记资料库：王亮楨（CBDB 526805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526805&o=json
            external_identifier: CBDB:526805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v8ibyErz6V5uLUF9shh0J7
        subject_person_id: p_LrMmLqP8UX3PAEont2NFmW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A2RNKt5PKDSvSHAbDzXb9c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_98Ndi5HE_rqxdveO3Y3t6k
          claim_id: c_v8ibyErz6V5uLUF9shh0J7
          source_id: s_bcsQ6AMVduzF5mqMMJgQea
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12966：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LrMmLqP8UX3PAEont2NFmW
        status: active
        display_name: 王洪順
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亮楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王亮楨，清人物。中国历代人物传记资料库（CBDB）以人物编号 526805 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王亮楨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LrMmLqP8UX3PAEont2NFmW | 王洪順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮楨（CBDB 526805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526805&o=json)
