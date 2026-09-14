---
schema: wang-person/v1
id: p_Jj8dkQubs7taj8bUq4RoTF
status: active
merged_into: null
display_name: 王鯨
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTbsLxHDfDT9fMwfEYd1ZN
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LUGs7vF6AcjUGQM7avaycy
          claim_id: c_mTbsLxHDfDT9fMwfEYd1ZN
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: CBDB:276002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276002）
          source: &a1
            id: s_R4BD5uKkAPNYJBZ61cEuF7
            source_type: api_record
            title: 中国历代人物传记资料库：王鯨（CBDB 276002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json
            external_identifier: CBDB:276002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B99yJxndh1aL2MPCTH8ofT
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯨，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 276002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TibcOyCrsAVPq7sguaWE3y
          claim_id: c_B99yJxndh1aL2MPCTH8ofT
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: CBDB:276002
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tLgThtz5aDq1oNka9DTJ0b
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HPi9LMn5Kw5811QG1EqGfq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_woKz42i7TVMPh7Es11CIXr
          claim_id: c_tLgThtz5aDq1oNka9DTJ0b
          source_id: s_R4BD5uKkAPNYJBZ61cEuF7
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HPi9LMn5Kw5811QG1EqGfq
        status: active
        display_name: 王世文
        merged_into_person_id: null
    - claim:
        id: c_e10_Ud-zpeovsFZ1g4ZTBE
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GDxszfNM53cdWbNNzPoaoH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5RVRThAfZNsCeBUxsMIQ8L
          claim_id: c_e10_Ud-zpeovsFZ1g4ZTBE
          source_id: s_KXksv0JM0JtI_DHM-JdDVL
          stance: supports
          locator: CBDB：兄弟 王世文（201664）之父／母 王鯨
          quotation: null
          interpretation_note: 由兄弟关系推断：王世俊 与 王世文 为同胞（CBDB 记「兄」），王世文 之父／母即 王世俊 之父／母。
          source:
            id: s_KXksv0JM0JtI_DHM-JdDVL
            source_type: api_record
            title: 中国历代人物传记资料库：王世俊（CBDB 276008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json
            external_identifier: CBDB:276008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GDxszfNM53cdWbNNzPoaoH
        status: active
        display_name: 王世俊
        merged_into_person_id: null
    - claim:
        id: c_f-VGIsRDcCUSgth3ACV3FO
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ds1EunL7j7phN36xPt2mhB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RgVwpEIUGcmbQ_sKMf6mMV
          claim_id: c_f-VGIsRDcCUSgth3ACV3FO
          source_id: s_DUIXMxFQXqIOGI4UY2ivGX
          stance: supports
          locator: CBDB：兄弟 王世文（201664）之父／母 王鯨
          quotation: null
          interpretation_note: 由兄弟关系推断：王世武 与 王世文 为同胞（CBDB 记「兄」），王世文 之父／母即 王世武 之父／母。
          source:
            id: s_DUIXMxFQXqIOGI4UY2ivGX
            source_type: api_record
            title: 中国历代人物传记资料库：王世武（CBDB 276005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276005&o=json
            external_identifier: CBDB:276005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ds1EunL7j7phN36xPt2mhB
        status: active
        display_name: 王世武
        merged_into_person_id: null
    - claim:
        id: c_MJv9j_XTN-53aGR_YZn5KA
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fREPtX5CeBBVFRis4ui8Wa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w4KfH3raRlYdtkp2JrHA1T
          claim_id: c_MJv9j_XTN-53aGR_YZn5KA
          source_id: s_Ff91I1RWygVfAVuA6f6ATr
          stance: supports
          locator: CBDB：兄弟 王世文（201664）之父／母 王鯨
          quotation: null
          interpretation_note: 由兄弟关系推断：王世用 与 王世文 为同胞（CBDB 记「兄」），王世文 之父／母即 王世用 之父／母。
          source:
            id: s_Ff91I1RWygVfAVuA6f6ATr
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 276006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276006&o=json
            external_identifier: CBDB:276006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fREPtX5CeBBVFRis4ui8Wa
        status: active
        display_name: 王世用
        merged_into_person_id: null
    - claim:
        id: c_wO9L1CewSQ6XDkMnUQNqkH
        subject_person_id: p_Jj8dkQubs7taj8bUq4RoTF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v4RrPC9uPkhUh6Z6g5833f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BzhIyE-aCWGKo7RtvKWUN
          claim_id: c_wO9L1CewSQ6XDkMnUQNqkH
          source_id: s_1Vfk9o1agldG7QF7cPMdSa
          stance: supports
          locator: CBDB：兄弟 王世文（201664）之父／母 王鯨
          quotation: null
          interpretation_note: 由兄弟关系推断：王世某 与 王世文 为同胞（CBDB 记「兄」），王世文 之父／母即 王世某 之父／母。
          source:
            id: s_1Vfk9o1agldG7QF7cPMdSa
            source_type: api_record
            title: 中国历代人物传记资料库：王世某（CBDB 276007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276007&o=json
            external_identifier: CBDB:276007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v4RrPC9uPkhUh6Z6g5833f
        status: active
        display_name: 王世某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鯨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鯨 | accepted |
| bio.summary | 王鯨，明人物。正德六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 276002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HPi9LMn5Kw5811QG1EqGfq | 王世文 | accepted |
| children | p_GDxszfNM53cdWbNNzPoaoH | 王世俊 | accepted |
| children | p_ds1EunL7j7phN36xPt2mhB | 王世武 | accepted |
| children | p_fREPtX5CeBBVFRis4ui8Wa | 王世用 | accepted |
| children | p_v4RrPC9uPkhUh6Z6g5833f | 王世某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鯨（CBDB 276002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276002&o=json)
- [中国历代人物传记资料库：王世俊（CBDB 276008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276008&o=json)
- [中国历代人物传记资料库：王世某（CBDB 276007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276007&o=json)
- [中国历代人物传记资料库：王世武（CBDB 276005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276005&o=json)
- [中国历代人物传记资料库：王世用（CBDB 276006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276006&o=json)
