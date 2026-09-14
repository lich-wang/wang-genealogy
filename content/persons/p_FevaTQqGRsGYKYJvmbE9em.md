---
schema: wang-person/v1
id: p_FevaTQqGRsGYKYJvmbE9em
status: active
merged_into: null
display_name: 王銓陽
cbdb_id: 221873
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Hbz59PgaENYRYJuT4Ybxy
        subject_person_id: p_FevaTQqGRsGYKYJvmbE9em
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221873）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mx-okLCSVqlpIulmnZI9yI
          claim_id: c_3Hbz59PgaENYRYJuT4Ybxy
          source_id: s_QfyDaDitiBE8xzXHHyoX88
          stance: supports
          locator: CBDB:221873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QfyDaDitiBE8xzXHHyoX88
            source_type: api_record
            title: 中国历代人物传记资料库：王銓陽（CBDB 221873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json
            external_identifier: CBDB:221873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JNs53EiSDdhWVAybBHU2KC
        subject_person_id: p_FevaTQqGRsGYKYJvmbE9em
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CV2U1zLLj59hPNSJ1wLRGm
          claim_id: c_JNs53EiSDdhWVAybBHU2KC
          source_id: s_QfyDaDitiBE8xzXHHyoX88
          stance: supports
          locator: CBDB:221873
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zBLpMTZ-Cu7wymtSPuZHH2
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FevaTQqGRsGYKYJvmbE9em
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x8sCFximye2vdhdTrLHYa8
          claim_id: c_zBLpMTZ-Cu7wymtSPuZHH2
          source_id: s_W5Uhfi77KoKES6moU3zU_n
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王銓陽 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王銓陽 之父／母。
          source:
            id: s_W5Uhfi77KoKES6moU3zU_n
            source_type: api_record
            title: 中国历代人物传记资料库：王銓陽（CBDB 221873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json
            external_identifier: CBDB:221873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iEzBpfQksvKwtnLVgiEPSK
        status: active
        display_name: 王賜良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_U0SleH__sb8awZez_HgBTq
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FevaTQqGRsGYKYJvmbE9em
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q_PzCCAWMwLIWCClYlFROF
          claim_id: c_U0SleH__sb8awZez_HgBTq
          source_id: s_W5Uhfi77KoKES6moU3zU_n
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W5Uhfi77KoKES6moU3zU_n
            source_type: api_record
            title: 中国历代人物传记资料库：王銓陽（CBDB 221873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json
            external_identifier: CBDB:221873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
---

# 王銓陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王銓陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221873） | accepted |
| name.primary | 王銓陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| other | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銓陽（CBDB 221873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221873&o=json)
