---
schema: wang-person/v1
id: p_aJMiNXJSvn8avCPNUFL6Jr
status: active
merged_into: null
display_name: 王瓚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zqsLKUpr52KuNKKJCQxxmm
        subject_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LYzXqzm7GqmRzQ9ceYws4R
          claim_id: c_zqsLKUpr52KuNKKJCQxxmm
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: CBDB:126892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126892）
          source: &a1
            id: s_nsNS4tYiMyfHMLUzeivoSe
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 126892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json
            external_identifier: CBDB:126892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nATHcrCNiHA7YRd89qtLfP
        subject_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
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
        - id: cs_zw8yJ42sKFyb5u9DoGvN8F
          claim_id: c_nATHcrCNiHA7YRd89qtLfP
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_voyUgdYB-wMCqg7GvQTr82
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKtPEZYLBxGrUB4Vrq2JEV
          claim_id: c_voyUgdYB-wMCqg7GvQTr82
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NkjrkfLSubJRquGWk6KTAC
        status: active
        display_name: 王祚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_x9Qd7y4rDFbuPPM43GH1Jk
        subject_person_id: p_XVyXQn9mv4GWFDoLFJcVQ7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCD6vxQbkGeQUrCXc6mBEg
          claim_id: c_x9Qd7y4rDFbuPPM43GH1Jk
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XVyXQn9mv4GWFDoLFJcVQ7
        status: active
        display_name: 王原宏
        merged_into_person_id: null
    - claim:
        id: c_RNqJBhoBcdlN-NjnF5YyyU
        subject_person_id: p_HK1Kd6YYcVadLhFCdPXNh3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cP2X-L4QE_37KTGShFgrC-
          claim_id: c_RNqJBhoBcdlN-NjnF5YyyU
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HK1Kd6YYcVadLhFCdPXNh3
        status: active
        display_name: 王文燠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NkjrkfLSubJRquGWk6KTAC | 王祚 | accepted |
| ancestors | p_XVyXQn9mv4GWFDoLFJcVQ7 | 王原宏 | accepted |
| ancestors | p_HK1Kd6YYcVadLhFCdPXNh3 | 王文燠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 126892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json)
