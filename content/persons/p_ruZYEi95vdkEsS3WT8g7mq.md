---
schema: wang-person/v1
id: p_ruZYEi95vdkEsS3WT8g7mq
status: active
merged_into: null
display_name: 王崇德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_guQNWLkFJ7Q5ApeoS5W2HG
        subject_person_id: p_ruZYEi95vdkEsS3WT8g7mq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SmuqQh9sLfpMmXA56Xp35W
          claim_id: c_guQNWLkFJ7Q5ApeoS5W2HG
          source_id: s_B6agcr1jQb9muTVCdkxKGL
          stance: supports
          locator: CBDB:301924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（301924）
          source: &a1
            id: s_B6agcr1jQb9muTVCdkxKGL
            source_type: api_record
            title: 中国历代人物传记资料库：王崇德（CBDB 301924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301924&o=json
            external_identifier: CBDB:301924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7CamigxF9RNHrocHLNTgtE
        subject_person_id: p_ruZYEi95vdkEsS3WT8g7mq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇德，明人物。嘉靖十七年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 301924）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_umS1NWaQiEc9TWhsKsDyES
          claim_id: c_7CamigxF9RNHrocHLNTgtE
          source_id: s_B6agcr1jQb9muTVCdkxKGL
          stance: supports
          locator: CBDB:301924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jv6MLbmjNPsfA_CGkmBjD3
        subject_person_id: p_q65LjSR3e6s3Y3D1bpqPNS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ruZYEi95vdkEsS3WT8g7mq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eI9yajErR0ngzViTBEvzxw
          claim_id: c_Jv6MLbmjNPsfA_CGkmBjD3
          source_id: s_6uvRTZZrMuZkFAIMkgUmT_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203246 王崇義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6uvRTZZrMuZkFAIMkgUmT_
            source_type: api_record
            title: 中国历代人物传记资料库：王崇德（CBDB 301924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301924&o=json
            external_identifier: CBDB:301924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q65LjSR3e6s3Y3D1bpqPNS
        status: active
        display_name: 王崇義
        merged_into_person_id: null
---

# 王崇德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇德 | accepted |
| bio.summary | 王崇德，明人物。嘉靖十七年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 301924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_q65LjSR3e6s3Y3D1bpqPNS | 王崇義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇德（CBDB 301924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301924&o=json)
