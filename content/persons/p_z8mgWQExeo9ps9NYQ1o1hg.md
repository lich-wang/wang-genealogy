---
schema: wang-person/v1
id: p_z8mgWQExeo9ps9NYQ1o1hg
status: active
merged_into: null
display_name: 王凱
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xhEjq4hETwU5yiwNTJbU2f
        subject_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pwh8S7V5rr7o17sUej7Kxz
          claim_id: c_xhEjq4hETwU5yiwNTJbU2f
          source_id: s_PdABoLdNRMCtFUYvEYFb7C
          stance: supports
          locator: CBDB:200743
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200743）
          source: &a1
            id: s_PdABoLdNRMCtFUYvEYFb7C
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 200743）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200743&o=json
            external_identifier: CBDB:200743
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kM6qL4DaDJQFSF2vKJLqBG
        subject_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFwCSe8zSyB3s2ieYUY31U
          claim_id: c_kM6qL4DaDJQFSF2vKJLqBG
          source_id: s_PdABoLdNRMCtFUYvEYFb7C
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
        id: c_uvpMsvyRFfPL41rszFqeGt
        subject_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱（生于1460年），明人物。明清進士進士，籍贯蠡縣，入仕進士。（中国历代人物传记资料库 CBDB 200743）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YuxOAYlsSLIWL4kd4TPNM3
          claim_id: c_uvpMsvyRFfPL41rszFqeGt
          source_id: s_PdABoLdNRMCtFUYvEYFb7C
          stance: supports
          locator: CBDB:200743
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F8B4fTN71ENmMfJcPpJDVF
        subject_person_id: p_2XQ9edNzTjVFAjV2kU7q1C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHhp3YV23zrIfBMsh_mLDu
          claim_id: c_F8B4fTN71ENmMfJcPpJDVF
          source_id: s_6KsjoUrKe3vBmFZZYrKKnw
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6KsjoUrKe3vBmFZZYrKKnw
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 262289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262289&o=json
            external_identifier: CBDB:262289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2XQ9edNzTjVFAjV2kU7q1C
        status: active
        display_name: 王舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AoriQRIk_ZJ_fl-JuxBv4F
        subject_person_id: p_SdVnGLjTg6VFNyLJJmbBDp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__XKrFLM2HK4cn6Kjmngz4_
          claim_id: c_AoriQRIk_ZJ_fl-JuxBv4F
          source_id: s_Q7kQRAfL1JDypbEqGunAtf
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q7kQRAfL1JDypbEqGunAtf
            source_type: api_record
            title: 中国历代人物传记资料库：王弘（CBDB 262287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262287&o=json
            external_identifier: CBDB:262287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SdVnGLjTg6VFNyLJJmbBDp
        status: active
        display_name: 王弘
        merged_into_person_id: null
    - claim:
        id: c_c2pZNYUX3RpCvuAOCkuX_d
        subject_person_id: p_tSAfAuPkdu48fzV9msaJC7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z8mgWQExeo9ps9NYQ1o1hg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fk54G3f1rILc-U3k6DBWhK
          claim_id: c_c2pZNYUX3RpCvuAOCkuX_d
          source_id: s_ZLDddWfb3Nb2GKyujX95t2
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZLDddWfb3Nb2GKyujX95t2
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 262288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262288&o=json
            external_identifier: CBDB:262288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tSAfAuPkdu48fzV9msaJC7
        status: active
        display_name: 王忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | 王凱（生于1460年），明人物。明清進士進士，籍贯蠡縣，入仕進士。（中国历代人物传记资料库 CBDB 200743） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XQ9edNzTjVFAjV2kU7q1C | 王舉 | accepted |
| ancestors | p_SdVnGLjTg6VFNyLJJmbBDp | 王弘 | accepted |
| ancestors | p_tSAfAuPkdu48fzV9msaJC7 | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘（CBDB 262287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262287&o=json)
- [中国历代人物传记资料库：王舉（CBDB 262289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262289&o=json)
- [中国历代人物传记资料库：王凱（CBDB 200743）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200743&o=json)
- [中国历代人物传记资料库：王忠（CBDB 262288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262288&o=json)
