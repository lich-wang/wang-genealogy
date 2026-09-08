---
schema: wang-person/v1
id: p_GNLnPFw1Dr1HJibhmrHDQH
status: active
merged_into: null
display_name: 王逸卿
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fwq2VDLcpAoMkgf3AFSQg1
        subject_person_id: p_GNLnPFw1Dr1HJibhmrHDQH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸卿，明人物。CBDB 记录其曾任都察院右副都御史、通議大夫。中国历代人物传记资料库（CBDB）以人物编号 222402 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tyWNwuDaMd2vLN3yGK8W4V
          claim_id: c_Fwq2VDLcpAoMkgf3AFSQg1
          source_id: s_5ypbt5HJwbj6QL1P1yo9cx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_5ypbt5HJwbj6QL1P1yo9cx
            source_type: api_record
            title: 维基数据：王逸卿（Q45513501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513501
            external_identifier: Q45513501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_aVO4HktuunFlKktI8kR5_i
          claim_id: c_Fwq2VDLcpAoMkgf3AFSQg1
          source_id: s_Qub8bEXGqX82LGNVfTYt6S
          stance: supports
          locator: CBDB:222402
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Qub8bEXGqX82LGNVfTYt6S
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王逸卿（222402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222402&o=json
            external_identifier: CBDB:222402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.678Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4KMhyuPoePEkE4hDh8r4Ui
        subject_person_id: p_GNLnPFw1Dr1HJibhmrHDQH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逸卿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hx6hHWC49G3kK2mSQZkDse
          claim_id: c_4KMhyuPoePEkE4hDh8r4Ui
          source_id: s_Qub8bEXGqX82LGNVfTYt6S
          stance: supports
          locator: Q45513501
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xS3CxsViMN2pWeAdkartTQ
          claim_id: c_4KMhyuPoePEkE4hDh8r4Ui
          source_id: s_5ypbt5HJwbj6QL1P1yo9cx
          stance: supports
          locator: Q45513501
          quotation: null
          interpretation_note: null
          source:
            id: s_5ypbt5HJwbj6QL1P1yo9cx
            source_type: api_record
            title: 维基数据：王逸卿（Q45513501）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513501
            external_identifier: Q45513501
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KBDHuALM53XGeUWjnkWzGN
        subject_person_id: p_VkzS7RnDgwBF356dDv2J9B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GNLnPFw1Dr1HJibhmrHDQH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8rRs4rPjS8nfgBWZVc8jbG
          claim_id: c_KBDHuALM53XGeUWjnkWzGN
          source_id: s_5ypbt5HJwbj6QL1P1yo9cx
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_k9z4Ke2rjb6RFqrDGyc7tU
          claim_id: c_KBDHuALM53XGeUWjnkWzGN
          source_id: s_D2QGDxwPQEyJqG7Hy6d39z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_D2QGDxwPQEyJqG7Hy6d39z
            source_type: api_record
            title: 维基数据：王纉（Q45513436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513436
            external_identifier: Q45513436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_VkzS7RnDgwBF356dDv2J9B
        status: active
        display_name: 王纉
        merged_into_person_id: null
  children:
    - claim:
        id: c_SekJdk1RCpXuNnnLos18sU
        subject_person_id: p_GNLnPFw1Dr1HJibhmrHDQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gwNFW4axAxQhH8DGCtmTDu
          claim_id: c_SekJdk1RCpXuNnnLos18sU
          source_id: s_gBCYsYXeEkQEzdXgKakyEi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gBCYsYXeEkQEzdXgKakyEi
            source_type: api_record
            title: 维基数据：王训（Q45513566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45513566
            external_identifier: Q45513566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:38.937Z
            metadata_json: null
        - id: cs_QxFAZ6kXtMNHEJK61ZFZqe
          claim_id: c_SekJdk1RCpXuNnnLos18sU
          source_id: s_5ypbt5HJwbj6QL1P1yo9cx
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_aZ1ZKEEFmDKA3BH7yDPbwn
        status: active
        display_name: 王训
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逸卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王逸卿，明人物。CBDB 记录其曾任都察院右副都御史、通議大夫。中国历代人物传记资料库（CBDB）以人物编号 222402 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王逸卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VkzS7RnDgwBF356dDv2J9B | 王纉 | accepted |
| children | p_aZ1ZKEEFmDKA3BH7yDPbwn | 王训 | accepted |

## 外部来源

- [维基数据：王训（Q45513566）](https://www.wikidata.org/wiki/Q45513566)
- [维基数据：王逸卿（Q45513501）](https://www.wikidata.org/wiki/Q45513501)
- [维基数据：王纉（Q45513436）](https://www.wikidata.org/wiki/Q45513436)
- [CBDB 中国历代人物传记资料库：王逸卿（222402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222402&o=json)
