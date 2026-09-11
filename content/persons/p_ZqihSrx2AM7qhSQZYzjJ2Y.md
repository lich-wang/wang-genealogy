---
schema: wang-person/v1
id: p_ZqihSrx2AM7qhSQZYzjJ2Y
status: active
merged_into: null
display_name: 袁氏
revision: 1
cbdb_id: 126287
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B_QjN-k-QhDMa1RyvYD8dY
        subject_person_id: p_ZqihSrx2AM7qhSQZYzjJ2Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁氏，元人物。籍贯桐廬。（中国历代人物传记资料库 CBDB 126287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sfoi697vi0vvx3GH8919Fk
          claim_id: c_B_QjN-k-QhDMa1RyvYD8dY
          source_id: s_GuxFjLruz7qet8w5WF2pnj
          stance: supports
          locator: CBDB:126287
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GuxFjLruz7qet8w5WF2pnj
            source_type: api_record
            title: 中国历代人物传记资料库：袁氏(王嶼妻)（CBDB 126287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126287&o=json
            external_identifier: CBDB:126287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DhoG_m2rEv572oFuoC1Lfl
        subject_person_id: p_ZqihSrx2AM7qhSQZYzjJ2Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5Wyc8zXpX2jKCMCcl0Eqd
          claim_id: c_DhoG_m2rEv572oFuoC1Lfl
          source_id: s_GuxFjLruz7qet8w5WF2pnj
          stance: supports
          locator: CBDB:126287
          quotation: null
          interpretation_note: CBDB 明确记录的王璵配偶
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
        id: c_GuMAcok_IcYPBnn1Qe0Ltm
        subject_person_id: p_o5iCKboKod63KLGnA3UGdF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZqihSrx2AM7qhSQZYzjJ2Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQzuT2Pi4CQ5YpG1q89wFq
          claim_id: c_GuMAcok_IcYPBnn1Qe0Ltm
          source_id: s_GuxFjLruz7qet8w5WF2pnj
          stance: supports
          locator: 宋濂全集，423-425：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o5iCKboKod63KLGnA3UGdF
        status: active
        display_name: 王璵
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 袁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 袁氏，元人物。籍贯桐廬。（中国历代人物传记资料库 CBDB 126287） | accepted |
| name.primary | 袁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_o5iCKboKod63KLGnA3UGdF | 王璵 | accepted |

## 外部来源

- [中国历代人物传记资料库：袁氏(王嶼妻)（CBDB 126287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126287&o=json)
