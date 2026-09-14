---
schema: wang-person/v1
id: p_e6hZfnHu9F2Qd2GTzWkfjg
status: active
merged_into: null
display_name: 王道成
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7P1o6TogduiMLQQdFw6SFb
        subject_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D9yP1hqBqVGD1Nm6NjtKxp
          claim_id: c_7P1o6TogduiMLQQdFw6SFb
          source_id: s_ov1VJQfKd2RNDa1eV5Sz96
          stance: supports
          locator: CBDB:219576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219576）
          source: &a1
            id: s_ov1VJQfKd2RNDa1eV5Sz96
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 219576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json
            external_identifier: CBDB:219576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.289Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3xHkgX7KFyvFaDVcqR2UFE
        subject_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道成，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219576）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-9VCqk60qI5QEVVpZrWo9M
          claim_id: c_3xHkgX7KFyvFaDVcqR2UFE
          source_id: s_ov1VJQfKd2RNDa1eV5Sz96
          stance: supports
          locator: CBDB:219576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BEoAJhKN4vZYv87sniD5Gg
        subject_person_id: p_RYeG6QXC3LvzmPc5LSo3Tt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ez-FGIsqyypXbF1xqcPNhf
          claim_id: c_BEoAJhKN4vZYv87sniD5Gg
          source_id: s_pSYkmH7SOJa-XFAWdT65zL
          stance: supports
          locator: CBDB：兄弟 王道增（206547）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王道成 与 王道增 为同胞（CBDB 记「兄」），王道增 之父／母即 王道成 之父／母。
          source:
            id: s_pSYkmH7SOJa-XFAWdT65zL
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 219576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json
            external_identifier: CBDB:219576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RYeG6QXC3LvzmPc5LSo3Tt
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Rz5uXiQvLp25h_u8nZscxF
        subject_person_id: p_e6hZfnHu9F2Qd2GTzWkfjg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zZbuHXnqm4wRFTtwvCX7hA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O2QnEW9uqyTK0wsjvLrkuX
          claim_id: c_Rz5uXiQvLp25h_u8nZscxF
          source_id: s_pSYkmH7SOJa-XFAWdT65zL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206547 王道增）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pSYkmH7SOJa-XFAWdT65zL
            source_type: api_record
            title: 中国历代人物传记资料库：王道成（CBDB 219576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json
            external_identifier: CBDB:219576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zZbuHXnqm4wRFTtwvCX7hA
        status: active
        display_name: 王道增
        merged_into_person_id: null
---

# 王道成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道成 | accepted |
| bio.summary | 王道成，明人物。萬曆八年進士，籍贯潁州。（中国历代人物传记资料库 CBDB 219576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RYeG6QXC3LvzmPc5LSo3Tt | 王澍 | accepted |
| other | p_zZbuHXnqm4wRFTtwvCX7hA | 王道增 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道成（CBDB 219576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219576&o=json)
