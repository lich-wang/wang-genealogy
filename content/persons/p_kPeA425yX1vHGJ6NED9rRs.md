---
schema: wang-person/v1
id: p_kPeA425yX1vHGJ6NED9rRs
status: active
merged_into: null
display_name: 王俊
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4MR3EFefc6cAU78nD82CXX
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DdgANuVJLTK8F48QG7p9R
          claim_id: c_4MR3EFefc6cAU78nD82CXX
          source_id: s_3B8eYQBHrVYkKALMpSzZ52
          stance: supports
          locator: CBDB:199171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199171）
          source: &a1
            id: s_3B8eYQBHrVYkKALMpSzZ52
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 199171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199171&o=json
            external_identifier: CBDB:199171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AoCJJ7FQtnur38VPofcpW3
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nK84fmspMM7FUJQrooArk8
          claim_id: c_AoCJJ7FQtnur38VPofcpW3
          source_id: s_3B8eYQBHrVYkKALMpSzZ52
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
        id: c_CXLr2N6yNJvj2t8P4Dw4A8
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊（生于1443年），明人物。成化二年進士，籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 199171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3KwihcnVuS1oCcffO7AGJf
          claim_id: c_CXLr2N6yNJvj2t8P4Dw4A8
          source_id: s_3B8eYQBHrVYkKALMpSzZ52
          stance: supports
          locator: CBDB:199171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_su1i1NULZXUsuG6jToQH1o
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kPeA425yX1vHGJ6NED9rRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wy9Lo-6AyAZUAHe66aIpqG
          claim_id: c_su1i1NULZXUsuG6jToQH1o
          source_id: s_LzTNeRjVVY8MNXtJ8Vn5SA
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LzTNeRjVVY8MNXtJ8Vn5SA
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 240509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240509&o=json
            external_identifier: CBDB:240509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wDGxRNCDYBWfdncywvt3LA
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cebjFdoKHdgTPekUOorzfs
        subject_person_id: p_CfAz2neDMAFFa4GMRAduBm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kPeA425yX1vHGJ6NED9rRs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p8kVcfa6SckL2dDEUlOabe
          claim_id: c_cebjFdoKHdgTPekUOorzfs
          source_id: s_cMtz7BG4ik6yR44AEPQ2P3
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cMtz7BG4ik6yR44AEPQ2P3
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 240498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240498&o=json
            external_identifier: CBDB:240498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CfAz2neDMAFFa4GMRAduBm
        status: active
        display_name: 王定
        merged_into_person_id: null
    - claim:
        id: c_HEeNq1pJDNHQeYXQloWUTU
        subject_person_id: p_CJNATpZ99oDSaUhVsKGcYP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kPeA425yX1vHGJ6NED9rRs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H7jgNSysFpshWmTW0Xn-UD
          claim_id: c_HEeNq1pJDNHQeYXQloWUTU
          source_id: s_N6R4BZj71PBeDwRNZ8MniF
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N6R4BZj71PBeDwRNZ8MniF
            source_type: api_record
            title: 中国历代人物传记资料库：王靜（CBDB 240487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240487&o=json
            external_identifier: CBDB:240487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CJNATpZ99oDSaUhVsKGcYP
        status: active
        display_name: 王靜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | 王俊（生于1443年），明人物。成化二年進士，籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 199171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wDGxRNCDYBWfdncywvt3LA | 王寧 | accepted |
| ancestors | p_CfAz2neDMAFFa4GMRAduBm | 王定 | accepted |
| ancestors | p_CJNATpZ99oDSaUhVsKGcYP | 王靜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 240498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240498&o=json)
- [中国历代人物传记资料库：王靜（CBDB 240487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240487&o=json)
- [中国历代人物传记资料库：王俊（CBDB 199171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199171&o=json)
- [中国历代人物传记资料库：王寧（CBDB 240509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240509&o=json)
