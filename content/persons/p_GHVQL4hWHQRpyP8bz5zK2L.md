---
schema: wang-person/v1
id: p_GHVQL4hWHQRpyP8bz5zK2L
status: active
merged_into: null
display_name: 王澤
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NoJkD8FeLnXkj7oR6jo5K8
        subject_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fQQM5vguniTA82N8bMeSSb
          claim_id: c_NoJkD8FeLnXkj7oR6jo5K8
          source_id: s_KBDERYwJcHKh8jVGKL6CTN
          stance: supports
          locator: CBDB:207874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207874）
          source: &a1
            id: s_KBDERYwJcHKh8jVGKL6CTN
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 207874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207874&o=json
            external_identifier: CBDB:207874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5woKQpiWB9Dn2QqnCH66MG
        subject_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6PvUFTcrNJUCBYHj2ucr4m
          claim_id: c_5woKQpiWB9Dn2QqnCH66MG
          source_id: s_KBDERYwJcHKh8jVGKL6CTN
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
        id: c_XKy9fp3kzKFcpvsP5JYBss
        subject_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤（生于1407年），明人物。明清進士進士，籍贯汝州，入仕進士，曾任教諭。（中国历代人物传记资料库 CBDB 207874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e3HcphOjgAfimkDgyZNUxm
          claim_id: c_XKy9fp3kzKFcpvsP5JYBss
          source_id: s_KBDERYwJcHKh8jVGKL6CTN
          stance: supports
          locator: CBDB:207874
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IUSppv0mLAloQHXRx-0rgN
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RbgEvB7nqR4dBjyS_kaU2a
          claim_id: c_IUSppv0mLAloQHXRx-0rgN
          source_id: s_AjjZKFKm6h7x6QhyVxUWuZ
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AjjZKFKm6h7x6QhyVxUWuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 237286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237286&o=json
            external_identifier: CBDB:237286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5c4qM7nrdVKGAvGun3bQkF
        status: active
        display_name: 王鳳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q9abFCCi7R4gpNOQ-KnbiL
        subject_person_id: p_vveUdSrNnRwKbTykZwZwL8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YKLdcPh3qe7nwwyW_VXAbm
          claim_id: c_Q9abFCCi7R4gpNOQ-KnbiL
          source_id: s_M7U5RgYd8V2F5i38CAdoLL
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M7U5RgYd8V2F5i38CAdoLL
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 237285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237285&o=json
            external_identifier: CBDB:237285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vveUdSrNnRwKbTykZwZwL8
        status: active
        display_name: 王從善
        merged_into_person_id: null
    - claim:
        id: c_80o0wrk-eT3nG8RGc6lC0-
        subject_person_id: p_xo3gN1AcnYp3rCvHMixt52
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vZMXtBYXVf8YzMcqVo8mKv
          claim_id: c_80o0wrk-eT3nG8RGc6lC0-
          source_id: s_SBzBe9yC6S8S8aC38vWy9E
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SBzBe9yC6S8S8aC38vWy9E
            source_type: api_record
            title: 中国历代人物传记资料库：王和卿（CBDB 237284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237284&o=json
            external_identifier: CBDB:237284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xo3gN1AcnYp3rCvHMixt52
        status: active
        display_name: 王和卿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2xnN5RX4Wp0S68A9o6iF8c
        subject_person_id: p_3RzVzQR8Y32crEFtQpY6RF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwnvoW9koYXKYKXsGuoW2_
          claim_id: c_2xnN5RX4Wp0S68A9o6iF8c
          source_id: s_uHG1bfKkvxQN5IKN6wdtUX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207874 王澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uHG1bfKkvxQN5IKN6wdtUX
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 237291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json
            external_identifier: CBDB:237291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3RzVzQR8Y32crEFtQpY6RF
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_IuOQVbwVDmADFcsBqsOvF_
        subject_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RzHeKRrrFVE4Ac6M22sZsg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__L4UCGmlpSj59Hy4QZFNi3
          claim_id: c_IuOQVbwVDmADFcsBqsOvF_
          source_id: s_sT22kr5Z9iXULMVATsWCeE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207874 王澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sT22kr5Z9iXULMVATsWCeE
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 237290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237290&o=json
            external_identifier: CBDB:237290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RzHeKRrrFVE4Ac6M22sZsg
        status: active
        display_name: 王震
        merged_into_person_id: null
---

# 王澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | 王澤（生于1407年），明人物。明清進士進士，籍贯汝州，入仕進士，曾任教諭。（中国历代人物传记资料库 CBDB 207874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5c4qM7nrdVKGAvGun3bQkF | 王鳳 | accepted |
| ancestors | p_vveUdSrNnRwKbTykZwZwL8 | 王從善 | accepted |
| ancestors | p_xo3gN1AcnYp3rCvHMixt52 | 王和卿 | accepted |
| other | p_3RzVzQR8Y32crEFtQpY6RF | 王選 | accepted |
| other | p_RzHeKRrrFVE4Ac6M22sZsg | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 237285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237285&o=json)
- [中国历代人物传记资料库：王鳳（CBDB 237286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237286&o=json)
- [中国历代人物传记资料库：王和卿（CBDB 237284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237284&o=json)
- [中国历代人物传记资料库：王選（CBDB 237291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json)
- [中国历代人物传记资料库：王澤（CBDB 207874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207874&o=json)
- [中国历代人物传记资料库：王震（CBDB 237290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237290&o=json)
