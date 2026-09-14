---
schema: wang-person/v1
id: p_GwTwAk8kgcw8JiRbnA9GB3
status: active
merged_into: null
display_name: 王秉彝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pWfeA5jARcrAR4oeYkPPjs
        subject_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jfzJu4YCnuCPTuvLm8aLjj
          claim_id: c_pWfeA5jARcrAR4oeYkPPjs
          source_id: s_i41sQFsmFPaCrSHhW1WJPp
          stance: supports
          locator: CBDB:272756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272756）
          source: &a1
            id: s_i41sQFsmFPaCrSHhW1WJPp
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 272756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json
            external_identifier: CBDB:272756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_teqzn9PqcsrKzG74p72GFi
        subject_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉彝，明人物。弘治十八年進士，籍贯西充。（中国历代人物传记资料库 CBDB 272756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rVUabphHuHM7Yo1kFW6wiU
          claim_id: c_teqzn9PqcsrKzG74p72GFi
          source_id: s_i41sQFsmFPaCrSHhW1WJPp
          stance: supports
          locator: CBDB:272756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V4jrZ3UhwMxAP6bVyuinKn
        subject_person_id: p_xTGz6CSCfnLnyJ3himBvrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_53olLA5ksVUBgEVw0THfGH
          claim_id: c_V4jrZ3UhwMxAP6bVyuinKn
          source_id: s_8BVb9TxWyJfg_t3Lxkvzl4
          stance: supports
          locator: CBDB：兄弟 王秉良（201458）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王秉彝 与 王秉良 为同胞（CBDB 记「弟」），王秉良 之父／母即 王秉彝 之父／母。
          source:
            id: s_8BVb9TxWyJfg_t3Lxkvzl4
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 272756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json
            external_identifier: CBDB:272756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xTGz6CSCfnLnyJ3himBvrU
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_l7jJE_zcNJtKJGG6gbuthG
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GwTwAk8kgcw8JiRbnA9GB3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MpAuAHF1crSRHNkyrQe8Lt
          claim_id: c_l7jJE_zcNJtKJGG6gbuthG
          source_id: s_8BVb9TxWyJfg_t3Lxkvzl4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8BVb9TxWyJfg_t3Lxkvzl4
            source_type: api_record
            title: 中国历代人物传记资料库：王秉彝（CBDB 272756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json
            external_identifier: CBDB:272756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AJ36QsHYvNFFPiM32NAShM
        status: active
        display_name: 王秉良
        merged_into_person_id: null
---

# 王秉彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉彝 | accepted |
| bio.summary | 王秉彝，明人物。弘治十八年進士，籍贯西充。（中国历代人物传记资料库 CBDB 272756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xTGz6CSCfnLnyJ3himBvrU | 王俊 | accepted |
| other | p_AJ36QsHYvNFFPiM32NAShM | 王秉良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉彝（CBDB 272756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272756&o=json)
