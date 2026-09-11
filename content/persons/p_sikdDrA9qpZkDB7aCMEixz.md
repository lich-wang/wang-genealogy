---
schema: wang-person/v1
id: p_sikdDrA9qpZkDB7aCMEixz
status: active
merged_into: null
display_name: 王孝逸
cbdb_id: 525989
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JcjpMrtmU8kBctfFsjsTHh
        subject_person_id: p_sikdDrA9qpZkDB7aCMEixz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝逸，明人物。中国历代人物传记资料库（CBDB）以人物编号 525989 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tNTAkryy4ljBIv3y55zKof
          claim_id: c_JcjpMrtmU8kBctfFsjsTHh
          source_id: s_3gHQxhDXiDmWW1GLkMLFfo
          stance: supports
          locator: CBDB:525989
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_3gHQxhDXiDmWW1GLkMLFfo
            source_type: api_record
            title: 中国历代人物传记资料库：王孝逸（CBDB 525989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525989&o=json
            external_identifier: CBDB:525989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HFe6p8kysFkaEicDeVDq2P
        subject_person_id: p_sikdDrA9qpZkDB7aCMEixz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝逸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VEi8eUT3bTg7uqCrrUMSJk
          claim_id: c_HFe6p8kysFkaEicDeVDq2P
          source_id: s_3gHQxhDXiDmWW1GLkMLFfo
          stance: supports
          locator: CBDB:525989
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_3gHQxhDXiDmWW1GLkMLFfo
            source_type: api_record
            title: 中国历代人物传记资料库：王孝逸（CBDB 525989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525989&o=json
            external_identifier: CBDB:525989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jAjzeKPcMPy3EJ1ffygz9T
        subject_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sikdDrA9qpZkDB7aCMEixz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdeHjCyi9D1XVlv784e12A
          claim_id: c_jAjzeKPcMPy3EJ1ffygz9T
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11907：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rMiKQdLixLiHHyQLAuXGgm
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 68246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json
            external_identifier: CBDB:68246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PsCtJUsnu3eY9rXNjF4Fo
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王孝逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝逸，明人物。中国历代人物传记资料库（CBDB）以人物编号 525989 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王孝逸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4PsCtJUsnu3eY9rXNjF4Fo | 王廷相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 68246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json)
- [中国历代人物传记资料库：王孝逸（CBDB 525989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525989&o=json)
