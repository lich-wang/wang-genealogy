---
schema: wang-person/v1
id: p_jEge1NAq3ePJ9ur7GpBHiF
status: active
merged_into: null
display_name: 王承陽
cbdb_id: 221869
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iNKdheYEAN2ZTezMctXSLa
        subject_person_id: p_jEge1NAq3ePJ9ur7GpBHiF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221869）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_P4_fj99YJ_dDOjrdWXNLNw
          claim_id: c_iNKdheYEAN2ZTezMctXSLa
          source_id: s_D9wbupH2yUiWGoh6kvQRun
          stance: supports
          locator: CBDB:221869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D9wbupH2yUiWGoh6kvQRun
            source_type: api_record
            title: 中国历代人物传记资料库：王承陽（CBDB 221869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json
            external_identifier: CBDB:221869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A9Dw3wJaDNvAyLntbdX6X6
        subject_person_id: p_jEge1NAq3ePJ9ur7GpBHiF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PyHGD7NmHsEf4DfDrB5FSP
          claim_id: c_A9Dw3wJaDNvAyLntbdX6X6
          source_id: s_D9wbupH2yUiWGoh6kvQRun
          stance: supports
          locator: CBDB:221869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cHg1nDPAVboeJ7TwF08bs5
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jEge1NAq3ePJ9ur7GpBHiF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1GQZUc6MMPNxKrlMM5qPPs
          claim_id: c_cHg1nDPAVboeJ7TwF08bs5
          source_id: s_wxXlsBcVauFaIqymvCWS6H
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王承陽 与 王三陽 为同胞（CBDB 记「兄」），王三陽 之父／母即 王承陽 之父／母。
          source:
            id: s_wxXlsBcVauFaIqymvCWS6H
            source_type: api_record
            title: 中国历代人物传记资料库：王承陽（CBDB 221869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json
            external_identifier: CBDB:221869
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
        id: c_cjB2bLSQ_CHEDk9MpHjk0R
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jEge1NAq3ePJ9ur7GpBHiF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XHeyRDiA7krGXcpeqH_n-1
          claim_id: c_cjB2bLSQ_CHEDk9MpHjk0R
          source_id: s_wxXlsBcVauFaIqymvCWS6H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wxXlsBcVauFaIqymvCWS6H
            source_type: api_record
            title: 中国历代人物传记资料库：王承陽（CBDB 221869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json
            external_identifier: CBDB:221869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
---

# 王承陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221869） | accepted |
| name.primary | 王承陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| other | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承陽（CBDB 221869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221869&o=json)
