---
schema: wang-person/v1
id: p_9nEN1wcMurxxo4Z5YaVJEh
status: active
merged_into: null
display_name: 王海
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7bf3SFBnBM57CLhnBg4LXg
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eiPHJ4dDiQ3ViVaBgL8vvG
          claim_id: c_7bf3SFBnBM57CLhnBg4LXg
          source_id: s_KNfqCFvx4suPRQMFekJ9z8
          stance: supports
          locator: CBDB:294712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294712）
          source: &a1
            id: s_KNfqCFvx4suPRQMFekJ9z8
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 294712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294712&o=json
            external_identifier: CBDB:294712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMXNxCkHXyENBtEpGrq4Za
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海，明人物。嘉靖十一年進士，籍贯南安。（中国历代人物传记资料库 CBDB 294712）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0RolBCI4U9Mu1aR5wm-Wwn
          claim_id: c_SMXNxCkHXyENBtEpGrq4Za
          source_id: s_KNfqCFvx4suPRQMFekJ9z8
          stance: supports
          locator: CBDB:294712
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iaHod77ipD-CB0W62c1LbI
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LwC0nbVaz3nfWZf0zd8KQM
          claim_id: c_iaHod77ipD-CB0W62c1LbI
          source_id: s_KNfqCFvx4suPRQMFekJ9z8
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_35PzL233nqJ85Q2BX1Q5dA
        status: active
        display_name: 王良柱
        merged_into_person_id: null
    - claim:
        id: c_fcymRgaQ8A5Dg2ZnumAcI6
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3nf9ab8h84GUyH33naKo9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WrCmYFnlRQhwxvfMNIBPSX
          claim_id: c_fcymRgaQ8A5Dg2ZnumAcI6
          source_id: s_OWh19CuAF--cZS5qVZI2BR
          stance: supports
          locator: CBDB：兄弟 王良柱（202803）之父／母 王海
          quotation: null
          interpretation_note: 由兄弟关系推断：王良采 与 王良柱 为同胞（CBDB 记「兄」），王良柱 之父／母即 王良采 之父／母。
          source:
            id: s_OWh19CuAF--cZS5qVZI2BR
            source_type: api_record
            title: 中国历代人物传记资料库：王良采（CBDB 294716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294716&o=json
            external_identifier: CBDB:294716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3nf9ab8h84GUyH33naKo9K
        status: active
        display_name: 王良采
        merged_into_person_id: null
    - claim:
        id: c_EiSRZKvGlTDkJIgyx8ReGg
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3pL1tA1mSzmiPu8DQPZbjL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekApm59CxhDjuGw1AzSWKI
          claim_id: c_EiSRZKvGlTDkJIgyx8ReGg
          source_id: s_fKuBkMcx0JZJ4PF8cJ7TzG
          stance: supports
          locator: CBDB：兄弟 王良柱（202803）之父／母 王海
          quotation: null
          interpretation_note: 由兄弟关系推断：王良檝 与 王良柱 为同胞（CBDB 记「兄」），王良柱 之父／母即 王良檝 之父／母。
          source:
            id: s_fKuBkMcx0JZJ4PF8cJ7TzG
            source_type: api_record
            title: 中国历代人物传记资料库：王良檝（CBDB 294715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294715&o=json
            external_identifier: CBDB:294715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3pL1tA1mSzmiPu8DQPZbjL
        status: active
        display_name: 王良檝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王海 | accepted |
| bio.summary | 王海，明人物。嘉靖十一年進士，籍贯南安。（中国历代人物传记资料库 CBDB 294712） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_35PzL233nqJ85Q2BX1Q5dA | 王良柱 | accepted |
| children | p_3nf9ab8h84GUyH33naKo9K | 王良采 | accepted |
| children | p_3pL1tA1mSzmiPu8DQPZbjL | 王良檝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海（CBDB 294712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294712&o=json)
- [中国历代人物传记资料库：王良采（CBDB 294716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294716&o=json)
- [中国历代人物传记资料库：王良檝（CBDB 294715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294715&o=json)
