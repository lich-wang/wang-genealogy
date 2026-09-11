---
schema: wang-person/v1
id: p_sZ8HrLCvQAny2x2iAdLqrA
status: active
merged_into: null
display_name: 王士銘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FcpXRAwVSgCv2PL5fnnKha
        subject_person_id: p_sZ8HrLCvQAny2x2iAdLqrA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RNecZXsA6mrsMrdFLg4B6u
          claim_id: c_FcpXRAwVSgCv2PL5fnnKha
          source_id: s_wC2hxJqqsFYFHqdb4TRLE1
          stance: supports
          locator: CBDB:692756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692756）
          source: &a1
            id: s_wC2hxJqqsFYFHqdb4TRLE1
            source_type: api_record
            title: 中国历代人物传记资料库：王士銘（CBDB 692756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692756&o=json
            external_identifier: CBDB:692756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6D3rA3kssiJMBbRZPjvfV
        subject_person_id: p_sZ8HrLCvQAny2x2iAdLqrA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士銘，清人物。籍贯海鹽，身份为詩人。（中国历代人物传记资料库 CBDB 692756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Pf5teCj29aosOHfZoV-Qz4
          claim_id: c_x6D3rA3kssiJMBbRZPjvfV
          source_id: s_wC2hxJqqsFYFHqdb4TRLE1
          stance: supports
          locator: CBDB:692756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Yq0TUf0DbCgS7ScssokjI7
        subject_person_id: p_ZKUbPgsMvkoACirZdXsiLc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sZ8HrLCvQAny2x2iAdLqrA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aVvXbGUBnvxXm4xwaSmSBH
          claim_id: c_Yq0TUf0DbCgS7ScssokjI7
          source_id: s_wC2hxJqqsFYFHqdb4TRLE1
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293960：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZKUbPgsMvkoACirZdXsiLc
        status: active
        display_name: 王唐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士銘 | accepted |
| bio.summary | 王士銘，清人物。籍贯海鹽，身份为詩人。（中国历代人物传记资料库 CBDB 692756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZKUbPgsMvkoACirZdXsiLc | 王唐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士銘（CBDB 692756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692756&o=json)
