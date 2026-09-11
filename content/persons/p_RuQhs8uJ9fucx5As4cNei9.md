---
schema: wang-person/v1
id: p_RuQhs8uJ9fucx5As4cNei9
status: active
merged_into: null
display_name: 王作霖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZsMUbf4RfTzP4yLkQjDnx1
        subject_person_id: p_RuQhs8uJ9fucx5As4cNei9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N8jTgwdr6B7UovjhwF52rn
          claim_id: c_ZsMUbf4RfTzP4yLkQjDnx1
          source_id: s_eZqkMQXh96bG8hubaii9QH
          stance: supports
          locator: CBDB:551382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551382）
          source: &a1
            id: s_eZqkMQXh96bG8hubaii9QH
            source_type: api_record
            title: 中国历代人物传记资料库：王作霖（CBDB 551382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551382&o=json
            external_identifier: CBDB:551382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zV6ik6LJ1Ap2eeUwdJLztP
        subject_person_id: p_RuQhs8uJ9fucx5As4cNei9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王作霖，清人物。籍贯婺源，入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 551382）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sJVLkOScOsQOISOMDjiYru
          claim_id: c_zV6ik6LJ1Ap2eeUwdJLztP
          source_id: s_eZqkMQXh96bG8hubaii9QH
          stance: supports
          locator: CBDB:551382
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5_Mu7GeAdA1S1AqyXpoJ4u
        subject_person_id: p_RuQhs8uJ9fucx5As4cNei9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yMc2x5J5o12fBMLuty9uKc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0gbI1LFNC8JCe8WLEKdEc
          claim_id: c_5_Mu7GeAdA1S1AqyXpoJ4u
          source_id: s_eZqkMQXh96bG8hubaii9QH
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160561：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yMc2x5J5o12fBMLuty9uKc
        status: active
        display_name: 王在文
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_O58c_Jodrl4IAFErvpJCsO
        subject_person_id: p_RuQhs8uJ9fucx5As4cNei9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FLURKBk3xeprKVpRPTEzkd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f1bokSV8wJ54BRJG0btH9I
          claim_id: c_O58c_Jodrl4IAFErvpJCsO
          source_id: s_aTG1523xWms7tBouLJaGPg
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160561：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aTG1523xWms7tBouLJaGPg
            source_type: api_record
            title: 中国历代人物传记资料库：王緜泰（CBDB 551384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551384&o=json
            external_identifier: CBDB:551384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FLURKBk3xeprKVpRPTEzkd
        status: active
        display_name: 王緜泰
        merged_into_person_id: null
  other: []
---

# 王作霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作霖 | accepted |
| bio.summary | 王作霖，清人物。籍贯婺源，入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 551382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yMc2x5J5o12fBMLuty9uKc | 王在文 | accepted |
| descendants | p_FLURKBk3xeprKVpRPTEzkd | 王緜泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緜泰（CBDB 551384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551384&o=json)
- [中国历代人物传记资料库：王作霖（CBDB 551382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551382&o=json)
