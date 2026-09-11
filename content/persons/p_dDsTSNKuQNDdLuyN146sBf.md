---
schema: wang-person/v1
id: p_dDsTSNKuQNDdLuyN146sBf
status: active
merged_into: null
display_name: 王雄
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3bpPTSxUhrKAsnA5mbmbrH
        subject_person_id: p_dDsTSNKuQNDdLuyN146sBf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bGZcBg4QH9HRepzADiA4Rr
          claim_id: c_3bpPTSxUhrKAsnA5mbmbrH
          source_id: s_K67zNjj24y26DZGxbNEGVV
          stance: supports
          locator: CBDB:201736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201736）
          source: &a1
            id: s_K67zNjj24y26DZGxbNEGVV
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 201736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201736&o=json
            external_identifier: CBDB:201736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dA7Cmhc6dzujub7WQq1qdN
        subject_person_id: p_dDsTSNKuQNDdLuyN146sBf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RGG8tifjsZkeQybusjVb2T
          claim_id: c_dA7Cmhc6dzujub7WQq1qdN
          source_id: s_K67zNjj24y26DZGxbNEGVV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gw113p1NoJMwiXWVMqeBWb
        subject_person_id: p_dDsTSNKuQNDdLuyN146sBf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄（生于1475年），明人物。明清進士進士，籍贯長山，入仕進士。（中国历代人物传记资料库 CBDB 201736）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4-SkeyQsKY2LkSy3dfsvB3
          claim_id: c_Gw113p1NoJMwiXWVMqeBWb
          source_id: s_K67zNjj24y26DZGxbNEGVV
          stance: supports
          locator: CBDB:201736
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gYK6ChFFHAV7qH1vZKturz
        subject_person_id: p_sr256MBGaAqYqzJEV6SSHK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_On_jATjocoBZZ0dOuDLVJ2
          claim_id: c_gYK6ChFFHAV7qH1vZKturz
          source_id: s_63cXZ8SBtpjuzmkJU6p7i1
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_63cXZ8SBtpjuzmkJU6p7i1
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 277372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277372&o=json
            external_identifier: CBDB:277372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sr256MBGaAqYqzJEV6SSHK
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yOnhs0xm4MjV2xtZ81BoW5
        subject_person_id: p_2KR5LQkPas1zC6A4F8pmtu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kI8RK2hrr8fDh5Cj41B2s4
          claim_id: c_yOnhs0xm4MjV2xtZ81BoW5
          source_id: s_A1GRPfNYytp7SYBHBSTMfT
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A1GRPfNYytp7SYBHBSTMfT
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 277371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277371&o=json
            external_identifier: CBDB:277371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2KR5LQkPas1zC6A4F8pmtu
        status: active
        display_name: 王興
        merged_into_person_id: null
    - claim:
        id: c_F4tVdygwuBJOXmXZYDmOsc
        subject_person_id: p_j6DephxBQfnHHbzUifPi55
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dDsTSNKuQNDdLuyN146sBf
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pEGmcm9lesoRu1SAnb5-JS
          claim_id: c_F4tVdygwuBJOXmXZYDmOsc
          source_id: s_74Emxj48FqWLrUU3wBqpLC
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_74Emxj48FqWLrUU3wBqpLC
            source_type: api_record
            title: 中国历代人物传记资料库：王友才（CBDB 277370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277370&o=json
            external_identifier: CBDB:277370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j6DephxBQfnHHbzUifPi55
        status: active
        display_name: 王友才
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| birth.date | 1475年 | accepted |
| bio.summary | 王雄（生于1475年），明人物。明清進士進士，籍贯長山，入仕進士。（中国历代人物传记资料库 CBDB 201736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sr256MBGaAqYqzJEV6SSHK | 王綱 | accepted |
| ancestors | p_2KR5LQkPas1zC6A4F8pmtu | 王興 | accepted |
| ancestors | p_j6DephxBQfnHHbzUifPi55 | 王友才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 277372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277372&o=json)
- [中国历代人物传记资料库：王興（CBDB 277371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277371&o=json)
- [中国历代人物传记资料库：王雄（CBDB 201736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201736&o=json)
- [中国历代人物传记资料库：王友才（CBDB 277370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277370&o=json)
