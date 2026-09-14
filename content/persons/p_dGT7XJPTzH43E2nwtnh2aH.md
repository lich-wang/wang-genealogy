---
schema: wang-person/v1
id: p_dGT7XJPTzH43E2nwtnh2aH
status: active
merged_into: null
display_name: 王進
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D4NdCtdfXrpvFmF7U3JrXY
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zkHNKBKbJjHwXWfEhu94PC
          claim_id: c_D4NdCtdfXrpvFmF7U3JrXY
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: CBDB:200041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200041）
          source: &a1
            id: s_CZEt9PyfQg11YUcwzJUQtY
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 200041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200041&o=json
            external_identifier: CBDB:200041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TdGEnw9NgEYSZkwaUKY7CB
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1445年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tWMVEEakdLJfwAZcZAeNC9
          claim_id: c_TdGEnw9NgEYSZkwaUKY7CB
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
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
        id: c_9zdbeABgXDkT7xAPCQWFEE
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進（生于1445年），明人物。明清進士進士，籍贯上元，入仕進士。（中国历代人物传记资料库 CBDB 200041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ljWUYAM9IPtZ5kDrIUYCVC
          claim_id: c_9zdbeABgXDkT7xAPCQWFEE
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: CBDB:200041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GbB17pMIIuFUttbyIOx7qX
        subject_person_id: p_khCnb8PLsCY5kwDiuH2tbM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kAgGSzFIdKN5kz_CANv82
          claim_id: c_GbB17pMIIuFUttbyIOx7qX
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_khCnb8PLsCY5kwDiuH2tbM
        status: active
        display_name: 王誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qHB_b1q9SnvhX_q9mgB6Xc
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zYEEzL4c31fH19xaeBKUuU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GQgB8Isop7MFlTEHx6gi-I
          claim_id: c_qHB_b1q9SnvhX_q9mgB6Xc
          source_id: s_o0frtG0I8X7NLhWJ4HUXzd
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o0frtG0I8X7NLhWJ4HUXzd
            source_type: api_record
            title: 中国历代人物传记资料库：蘇氏(王進妻)（CBDB 253055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253055&o=json
            external_identifier: CBDB:253055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zYEEzL4c31fH19xaeBKUuU
        status: active
        display_name: 蘇氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_kxj_tZ7GLIdvBHX7IbqFc0
        subject_person_id: p_NdQRpAtW3NavQ2HP8uayvv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_clRvolzYIGQQck-I75En7L
          claim_id: c_kxj_tZ7GLIdvBHX7IbqFc0
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NdQRpAtW3NavQ2HP8uayvv
        status: active
        display_name: 王二郎
        merged_into_person_id: null
    - claim:
        id: c_wvazpPwvNqB_IjDkqOV6cM
        subject_person_id: p_t16zS98dZCP6tSDJ7PhAYw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtSc-wVGsbLGwC2QqH80Xd
          claim_id: c_wvazpPwvNqB_IjDkqOV6cM
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t16zS98dZCP6tSDJ7PhAYw
        status: active
        display_name: 王志能
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_AuhbYk5tFoKR1TxcqcPWJB
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fwK9tTqvArY9vy1vbENHy7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dnUz7VxCOgQThYfEMsRbsI
          claim_id: c_AuhbYk5tFoKR1TxcqcPWJB
          source_id: s_9pVETnCeFo6TLKzK_trcud
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200041 王進）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9pVETnCeFo6TLKzK_trcud
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 253058）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253058&o=json
            external_identifier: CBDB:253058
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fwK9tTqvArY9vy1vbENHy7
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_9MTvMrw9b4xTdINH8Hkb0j
        subject_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rgjCHhxL6Ex3DnTcPj411u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YTKG5K6Ny7i4xMDte7Kzt6
          claim_id: c_9MTvMrw9b4xTdINH8Hkb0j
          source_id: s_43orTJ9hmWJnKPMNgMEaif
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200041 王進）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_43orTJ9hmWJnKPMNgMEaif
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 253056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253056&o=json
            external_identifier: CBDB:253056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rgjCHhxL6Ex3DnTcPj411u
        status: active
        display_name: 王通
        merged_into_person_id: null
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| birth.date | 1445年 | accepted |
| bio.summary | 王進（生于1445年），明人物。明清進士進士，籍贯上元，入仕進士。（中国历代人物传记资料库 CBDB 200041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_khCnb8PLsCY5kwDiuH2tbM | 王誠 | accepted |
| spouses | p_zYEEzL4c31fH19xaeBKUuU | 蘇氏 | accepted |
| ancestors | p_NdQRpAtW3NavQ2HP8uayvv | 王二郎 | accepted |
| ancestors | p_t16zS98dZCP6tSDJ7PhAYw | 王志能 | accepted |
| other | p_fwK9tTqvArY9vy1vbENHy7 | 王達 | accepted |
| other | p_rgjCHhxL6Ex3DnTcPj411u | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：蘇氏(王進妻)（CBDB 253055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253055&o=json)
- [中国历代人物传记资料库：王達（CBDB 253058）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253058&o=json)
- [中国历代人物传记资料库：王進（CBDB 200041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200041&o=json)
- [中国历代人物传记资料库：王通（CBDB 253056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253056&o=json)
