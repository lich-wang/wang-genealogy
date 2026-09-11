---
schema: wang-person/v1
id: p_pgR8SLxunnSi6qPKCxtHNt
status: active
merged_into: null
display_name: 王騏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cpbaGp3bgnL7Fw7jDZu6D7
        subject_person_id: p_pgR8SLxunnSi6qPKCxtHNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CqeaAEvupcDsPgt6bJCQNi
          claim_id: c_cpbaGp3bgnL7Fw7jDZu6D7
          source_id: s_2M935rawCVyB2ECqTfE8nG
          stance: supports
          locator: CBDB:237575
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237575）
          source: &a1
            id: s_2M935rawCVyB2ECqTfE8nG
            source_type: api_record
            title: 中国历代人物传记资料库：王騏（CBDB 237575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237575&o=json
            external_identifier: CBDB:237575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_umuAdNkfMYXytbCm7dHD9s
        subject_person_id: p_pgR8SLxunnSi6qPKCxtHNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王騏，明人物。正统七年進士，籍贯固安，身份为強記;博學強記、良吏;循吏，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 237575）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ytultje7QbhzXK8lpKojBN
          claim_id: c_umuAdNkfMYXytbCm7dHD9s
          source_id: s_2M935rawCVyB2ECqTfE8nG
          stance: supports
          locator: CBDB:237575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_s9LlZaOz7nrr5salbyP1YX
        subject_person_id: p_pgR8SLxunnSi6qPKCxtHNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwMl5pqj_fSxa8p2k9cVRq
          claim_id: c_s9LlZaOz7nrr5salbyP1YX
          source_id: s_2M935rawCVyB2ECqTfE8nG
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Koi5WJ5jcXbBAKpaCrntSB
        status: active
        display_name: 王復
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王騏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騏 | accepted |
| bio.summary | 王騏，明人物。正统七年進士，籍贯固安，身份为強記;博學強記、良吏;循吏，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 237575） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Koi5WJ5jcXbBAKpaCrntSB | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王騏（CBDB 237575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237575&o=json)
